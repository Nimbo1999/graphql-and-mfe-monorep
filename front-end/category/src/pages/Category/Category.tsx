import { useMemo, useEffect } from 'react';
import { Layout, Row, Col, PageHeader, Card, Typography, Spin } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';

import { useGetCategory } from '@hooks/queries/GetCategory';
import { toLocaleDateString, toLocaleTimeString } from '@utils/Date.utils';

import CategoryForm from './CategoryForm/CategoryForm';

import styles from './Category.module.scss';

const Category: React.FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [getCategory, { called, data }] = useGetCategory();

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

    const toDateTime = (value: string) => {
        const date = toLocaleDateString(value);
        const time = toLocaleTimeString(value);
        return `${date} at ${time}`;
    };

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
                            <header>
                                <Typography.Title level={2} type="secondary">
                                    Please fill the input
                                </Typography.Title>

                                {isOnEditMode && !!data && (
                                    <div className={styles.date}>
                                        <Typography.Text type="secondary">
                                            Created at:{' '}
                                            {toDateTime(data.findCategoryById.meta.createdAt)}
                                        </Typography.Text>

                                        <Typography.Text type="secondary">
                                            Last modified at:{' '}
                                            {toDateTime(data.findCategoryById.meta.lastModifiedAt)}
                                        </Typography.Text>
                                    </div>
                                )}
                            </header>
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
