import { Col, Layout, PageHeader, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

import { Paddings } from '@components';
// import { useHistory } from '@hooks/navigation/useHistory';
import CategoryList from './List/List';

const Categories: React.FC = () => {
    // const history = useHistory();
    const navigate = useNavigate();

    return (
        <Layout.Content>
            <Row gutter={[0, 16]}>
                <Col xs={24}>
                    <PageHeader
                        title="List of category"
                        onBack={() => navigate(-1)}
                        ghost={false}
                    />
                </Col>

                <Col xs={24}>
                    <Paddings horizontal={5}>
                        <CategoryList />
                    </Paddings>
                </Col>
            </Row>
        </Layout.Content>
    );
};

export default Categories;
