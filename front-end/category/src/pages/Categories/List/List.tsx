import { Table, Card, Button, Tooltip, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import EditOutlined from '@ant-design/icons/EditOutlined';
import type { ColumnsType } from 'antd/es/table';

import useCategories from '../../../hooks/useCategories';

import type { Category } from 'models/category';

const Categories: React.FC = () => {
    const { data, loading, error } = useCategories();
    const navigate = useNavigate();

    if (!!error) return <h2>Error! {JSON.stringify(error)}</h2>;

    const renderCategoryDates = (value: string): string => {
        const date = new Date(Number(value)).toLocaleDateString();
        const time = new Date(Number(value)).toLocaleTimeString();
        return `${date} at ${time}`;
    };

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
                return (
                    <div>
                        <Tooltip title="Edit Category">
                            <Button
                                icon={<EditOutlined />}
                                type="link"
                                onClick={() => navigate(`/${record.id}`)}
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
            loading={loading}
            extra={[
                <Button
                    type="primary"
                    size="large"
                    shape="round"
                    onClick={() => alert('Create category')}
                >
                    Create Category
                </Button>
            ]}
        >
            <Table
                columns={columns}
                dataSource={data?.findAllCategoryByName}
                loading={loading}
                bordered
                rowKey={({ id }) => id}
                size="large"
            />
        </Card>
    );
};

export default Categories;
