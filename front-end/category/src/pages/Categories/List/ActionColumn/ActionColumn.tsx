import { useNavigate } from 'react-router-dom';
import { Tooltip, Button } from 'antd';
import EditOutlined from '@ant-design/icons/EditOutlined';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';

import styles from './ActionColumn.module.scss';
import { useDeleteCategory } from '@hooks/mutations';

type ActionColumnProps = { id: number };

const ActionColumn: React.FC<ActionColumnProps> = ({ id }) => {
    const [deleteCategory, { loading: deleteCategoryLoading }] = useDeleteCategory();

    const navigate = useNavigate();

    return (
        <div className={styles.actionButtons}>
            <Tooltip title="Edit Category">
                <Button icon={<EditOutlined />} type="link" onClick={() => navigate(`/${id}`)} />
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
};

export default ActionColumn;
