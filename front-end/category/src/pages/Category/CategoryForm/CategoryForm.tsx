import { useEffect, useMemo } from 'react';
import { Form, Input, Button } from 'antd';

import { useParams, useNavigate } from 'react-router-dom';

import { useCreateCategory, useUpdateCategory } from '@hooks/mutations';
import { useCachedCategory } from '@hooks/queries';

import CategoryRoutes from '@constants/CategoryRoutes';

import styles from './CategoryForm.module.scss';

type FormResult = {
    name: string;
};

const CategoryForm: React.FC = () => {
    const [form] = Form.useForm<FormResult>();
    const navigate = useNavigate();
    const params = useParams();

    const [createCategory, { loading: loadingCreateCall }] = useCreateCategory();
    const [editCategory, { loading: loadingEditCall }] = useUpdateCategory(Number(params?.id));

    const isOnEditMode = useMemo(() => Object.keys(params).length > 0, [params]);

    const fechedCategory = useCachedCategory(Number(params?.id || -1));

    const loading = useMemo(
        (): boolean => loadingCreateCall || loadingEditCall,
        [loadingCreateCall, loadingEditCall]
    );

    const onCreateCategory = async (variables: FormResult) => {
        const result = await createCategory({ variables });
        if (!!result.data) {
            const { addCategory } = result.data;
            navigate(CategoryRoutes.PARAMETER(String(addCategory.id)), { replace: true });
        }
    };

    const onEditCategory = (variables: FormResult) => {
        editCategory({ variables: { id: Number(params!.id), name: variables.name } });
    };

    const onSubmit = (variables: FormResult) => {
        if (isOnEditMode) return onEditCategory(variables);
        onCreateCategory(variables);
    };

    const onReset = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        form.resetFields();
        navigate(CategoryRoutes.HOME, { replace: true });
    };

    useEffect(() => {
        console.log({ fechedCategory });
        if (!!fechedCategory && !!fechedCategory.findCategoryById) {
            const { findCategoryById } = fechedCategory;
            form.setFieldsValue({ name: findCategoryById.name });
        }
    }, [fechedCategory]);

    return (
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

                <Button
                    type="primary"
                    shape="round"
                    size="large"
                    htmlType="submit"
                    loading={loading}
                    disabled={loading}
                >
                    Submit
                </Button>
            </footer>
        </Form>
    );
};

export default CategoryForm;
