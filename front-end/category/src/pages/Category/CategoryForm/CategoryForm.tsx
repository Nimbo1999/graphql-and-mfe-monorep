import { useEffect, useMemo } from 'react';
import { Form, Input, Button, Spin } from 'antd';

import { useParams, useNavigate } from 'react-router-dom';

import useCreateCategoryMutation from '@hooks/mutations/CreateCategory';
import { useCachedCategory } from '@hooks/queries/GetCategory';

import CategoryRoutes from '@constants/CategoryRoutes';

import styles from './CategoryForm.module.scss';

type FormResult = {
    name: string;
};

const CategoryForm: React.FC = () => {
    const [form] = Form.useForm<FormResult>();
    const [mutateCategory, { loading }] = useCreateCategoryMutation();

    const navigate = useNavigate();
    const params = useParams();
    const isOnEditMode = useMemo(() => Object.keys(params).length > 0, [params]);

    const fechedCategory = useCachedCategory(Number(params?.id || -1));

    const onSubmit = async (variables: FormResult) => {
        if (isOnEditMode) {
            return null;
        }

        const result = await mutateCategory({ variables });
        if (!!result.data) {
            const { addCategory } = result.data;
            navigate(CategoryRoutes.PARAMETER(String(addCategory.id)));
        }
    };

    const onReset = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        form.resetFields();
    };

    useEffect(() => {
        if (!!fechedCategory && !!fechedCategory.data) {
            const { findCategoryById } = fechedCategory.data;
            form.setFieldsValue({ name: findCategoryById.name });
        }
    }, [fechedCategory]);

    return (
        <Spin size="large" tip="Loading..." spinning={loading}>
            <Form onFinish={onSubmit} onReset={onReset} layout="vertical" form={form}>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input category name!' }]}
                >
                    <Input />
                </Form.Item>

                <footer className={styles.actionButtons}>
                    <Button type="text" shape="round" size="large" htmlType="reset">
                        Cancel
                    </Button>

                    <Button type="primary" shape="round" size="large" htmlType="submit">
                        Submit
                    </Button>
                </footer>
            </Form>
        </Spin>
    );
};

export default CategoryForm;
