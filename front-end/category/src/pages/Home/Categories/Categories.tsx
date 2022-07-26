import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import useCategories from '../../../hooks/useCategories';

import type { Category } from 'models/category';

// const data: Category[] = [
//     {
//         id: 1,
//         name: 'Test',
//         meta: {
//             id: 1,
//             createdAt: new Date().toISOString(),
//             lastModifiedAt: new Date().toISOString(),
//         },
//     },
//     {
//         id: 2,
//         name: 'Test2',
//         meta: {
//             id: 2,
//             createdAt: new Date().toISOString(),
//             lastModifiedAt: new Date().toISOString(),
//         },
//     },
//     {
//         id: 3,
//         name: 'Test3',
//         meta: {
//             id: 3,
//             createdAt: new Date().toISOString(),
//             lastModifiedAt: new Date().toISOString(),
//         },
//     },
//     {
//         id: 4,
//         name: 'Test4',
//         meta: {
//             id: 4,
//             createdAt: new Date().toISOString(),
//             lastModifiedAt: new Date().toISOString(),
//         },
//     }
// ]

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
    }
];

const Categories: React.FC = () => {
    const { data, loading, error } = useCategories();

    if (!!error) return (
        <h2>Error! {JSON.stringify(error)}</h2>
    );

    return (
        <Table
            columns={columns}
            dataSource={data?.findAllCategoryByName}
            loading={loading}
        />
    );
}

export default Categories;
