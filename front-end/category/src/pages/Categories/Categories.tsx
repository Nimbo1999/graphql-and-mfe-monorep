import { Col, Layout, PageHeader, Row } from 'antd';

import { Paddings } from '@components';
import CategoryList from './List/List';

const Categories: React.FC = () => {
    return (
        <Layout.Content>
            <Row gutter={[0, 16]}>
                <Col xs={24}>
                    <PageHeader title="List of category" onBack={undefined} ghost={false} />
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
