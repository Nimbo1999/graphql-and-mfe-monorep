import { useNavigate } from 'react-router-dom';
import { Table, Card, Button, Tooltip, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import EditOutlined from '@ant-design/icons/EditOutlined';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';

import CategoryRoutes from '@constants/CategoryRoutes';
import { useGetCategories } from '@hooks/queries';
import { useDeleteCategory } from '@hooks/mutations';

import type { Category } from 'models/category';

import styles from './List.module.scss';

const Categories: React.FC = () => {
    const navigate = useNavigate();
    const [deleteCategory, { loading: deleteCategoryLoading }] = useDeleteCategory();
    const { data, loading: getCategoryLoading, error } = useGetCategories();

    if (!!error) return <h2>Error! {JSON.stringify(error)}</h2>;

    const renderCategoryDates = (value: string): string => {
        const date = new Date(Number(value)).toLocaleDateString();
        const time = new Date(Number(value)).toLocaleTimeString();
        return `${date} at ${time}`;
    };

    const navigateToCreateCategory = () => navigate(CategoryRoutes.CREATE_CATEGORY);

    const columns: ColumnsType<Category> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Created At',
            dataIndex: ['meta', 'createdAt'],
            render: renderCategoryDates
        },
        {
            title: 'Last modified At',
            dataIndex: ['meta', 'lastModifiedAt'],
            render: renderCategoryDates
        },
        {
            title: 'Actions',
            dataIndex: 'id',
            key: 'id',
            render(_, record) {
                const { id } = record;
                return (
                    <div className={styles.actionButtons}>
                        <Tooltip title="Edit Category">
                            <Button
                                icon={<EditOutlined />}
                                type="link"
                                onClick={() => navigate(`/${id}`)}
                            />
                        </Tooltip>

                        <Tooltip title="Delete Category">
                            <Button
                                icon={<DeleteOutlined />}
                                type="link"
                                danger
                                loading={deleteCategoryLoading}
                                disabled={deleteCategoryLoading}
                                onClick={() => deleteCategory({ variables: { id } })}
                            />
                        </Tooltip>
                    </div>
                );
            }
        }
    ];

    return (
        <Card
            title={
                <Typography.Title level={2} type="secondary">
                    Categories
                </Typography.Title>
            }
            loading={getCategoryLoading}
            extra={[
                <Button
                    type="primary"
                    size="large"
                    shape="round"
                    onClick={navigateToCreateCategory}
                >
                    Create Category
                </Button>
            ]}
        >
            <Table
                columns={columns}
                dataSource={data?.findAllCategoryByName}
                loading={getCategoryLoading}
                bordered
                rowKey={({ id }) => id}
                size="large"
            />
        </Card>
    );
};

export default Categories;
