import { Table, Card, Button, Tooltip } from 'antd';
import EditOutlined from '@ant-design/icons/EditOutlined';
import type { ColumnsType } from 'antd/es/table';

import useCategories from '../../../hooks/useCategories';

import type { Category } from 'models/category';

const columns: ColumnsType<Category> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Created At',
        dataIndex: 'meta.createdAt',
        key: 'meta.createdAt',
        render(_, record) {
            return new Date(Number(record.meta.createdAt)).toLocaleDateString();
        },
    },
    {
        title: 'Last modified At',
        dataIndex: 'meta.lastModifiedAt',
        key: 'meta.lastModifiedAt',
        render(_, record) {
            return new Date(Number(record.meta.lastModifiedAt)).toLocaleDateString();
        },
    },
    {
        title: 'Actions',
        dataIndex: 'id',
        key: 'id',
        render(_, record) {
            return (
                <div>
                    <Button icon={<EditOutlined />} type="link" onClick={() => alert('Hey')} />
                </div>
            )
        }
    }
];

const Categories: React.FC = () => {
    const { data, loading, error } = useCategories();

    if (!!error) return (
        <h2>Error! {JSON.stringify(error)}</h2>
    );

    return (
        <Card title="Category List" loading={loading}>
            <Table
                columns={columns}
                dataSource={data?.findAllCategoryByName}
                loading={loading}
                bordered
            />
        </Card>
    );
}

export default Categories;
