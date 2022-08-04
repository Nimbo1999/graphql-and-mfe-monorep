import { Form, Input, Button, Spin } from 'antd';

import { useParams } from 'react-router-dom';

import useCreateCategoryMutation from '@hooks/mutations/CreateCategory';
import { useCachedCategory } from '@hooks/queries/GetCategory';

import styles from './CategoryForm.module.scss';
import { useEffect } from 'react';

type FormResult = {
    name: string;
};

const CategoryForm: React.FC = () => {
    const [form] = Form.useForm<FormResult>();
    const [mutateCategory, { loading }] = useCreateCategoryMutation();

    const params = useParams();

    const fechedCategory = useCachedCategory(Number(params?.id || -1));

    const onSubmit = (variables: FormResult) => mutateCategory({ variables });

    const onReset = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        form.resetFields();
    };

    // Create a use effect to populate the category name field with fechedCategory value.
    // Create a use effect to populate the category name field with fechedCategory value.
    // Create a use effect to populate the category name field with fechedCategory value.

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
