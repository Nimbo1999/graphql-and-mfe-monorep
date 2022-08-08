import { useNavigate } from 'react-router-dom';
import { Table, Card, Button, Typography, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import CategoryRoutes from '@constants/CategoryRoutes';
import CategoryAdapter, { type CategoryRecord } from '@adapters/CategoryAdapter';

import { useGetCategories } from '@hooks/queries';
// import { useHistory } from '@hooks/navigation/useHistory';

import ActionColumn from './ActionColumn/ActionColumn';

import styles from './List.module.scss';

const Categories: React.FC = () => {
    // const history = useHistory();
    const navigate = useNavigate();
    const { data, loading: getCategoryLoading, error } = useGetCategories();

    if (!!error) return <h2>Error! {JSON.stringify(error)}</h2>;

    const renderCategoryDates = (value: string): JSX.Element => {
        const date = new Date(Number(value)).toLocaleDateString();
        const time = new Date(Number(value)).toLocaleTimeString();
        return (
            <>
                <Tag color="blue">{date}</Tag>

                <span className={styles.atSpan}>at</span>

                <Tag color="blue">{time}</Tag>
            </>
        );
    };

    const navigateToCreateCategory = () => navigate(CategoryRoutes.CREATE_CATEGORY);

    const columns: ColumnsType<CategoryRecord> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: renderCategoryDates
        },
        {
            title: 'Last modified At',
            dataIndex: 'lastModifiedAt',
            key: 'lastModifiedAt',
            render: renderCategoryDates
        },
        {
            title: 'Actions',
            dataIndex: 'id',
            key: 'id',
            render: id => <ActionColumn key={id} id={id} />
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
                dataSource={CategoryAdapter.toCategoriesList(data?.findAllCategoryByName)}
                loading={getCategoryLoading}
                bordered
                rowKey={({ id }) => id}
                key="id"
                size="large"
            />
        </Card>
    );
};

export default Categories;
