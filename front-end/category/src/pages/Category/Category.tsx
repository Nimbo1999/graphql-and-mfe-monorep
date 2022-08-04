import { useMemo, useEffect } from 'react';
import { Layout, Row, Col, PageHeader, Card, Typography, Spin } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';

import { useGetCategory } from '@hooks/queries/GetCategory';

import CategoryForm from './CategoryForm/CategoryForm';

const Category: React.FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [getCategory, { called }] = useGetCategory();

    const isOnEditMode = useMemo(() => Object.keys(params).length > 0, [params]);

    const pageTitle = isOnEditMode ? 'Edit category' : 'Create category';

    useEffect(() => {
        const fetchCategories = () => {
            // TODO: change this line into a throwlable exeption
            if (!params?.id) return;
            getCategory({ variables: { id: Number(params.id) } });
        };

        fetchCategories();
    }, [params]);

    if (!!params?.id && !called)
        return (
            <Layout.Content>
                <Spin tip="Loading..." />
            </Layout.Content>
        );

    return (
        <Layout.Content>
            <Row gutter={[0, 64]}>
                <Col xs={24}>
                    <PageHeader title={pageTitle} onBack={() => navigate(-1)} ghost={false} />
                </Col>

                <Col xs={12} offset={6}>
                    <Card
                        title={
                            <Typography.Title level={2} type="secondary">
                                Please fill the input
                            </Typography.Title>
                        }
                    >
                        <CategoryForm />
                    </Card>
                </Col>
            </Row>
        </Layout.Content>
    );
};

export default Category;
