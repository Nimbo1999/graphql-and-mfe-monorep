import { Col, Layout, PageHeader, Row } from 'antd';

import { Paddings } from '@components';
import Categories from '../Categories/Categories';

import styles from './HomeContent.module.scss';

const HomeContent: React.FC = () => {
    return (
        <Layout.Content>
            <Row gutter={[16, 16]}>
                <Col xs={24}>
                    <PageHeader
                        title="Category list"
                        subTitle="Availables categories"
                        onBack={undefined}
                        ghost={false}
                    />
                </Col>

               <Col xs={24}>
                    <Paddings horizontal={5}>
                        <Categories />
                    </Paddings>
                </Col>
            </Row>
        </Layout.Content>
    );
}

export default HomeContent;
