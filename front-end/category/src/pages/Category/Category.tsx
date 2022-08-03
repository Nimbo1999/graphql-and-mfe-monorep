import { Layout } from 'antd';
import { useParams } from 'react-router-dom';

const Category: React.FC = () => {
    const params = useParams();

    return (
        <Layout.Content>
            <h1>Hello Category</h1>
        </Layout.Content>
    );
};

export default Category;
