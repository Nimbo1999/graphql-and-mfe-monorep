import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <div className={styles.container}>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Button type="primary" size="large" shape="round" onClick={goBack}>
                        Home
                    </Button>
                }
            />
        </div>
    );
};

export default NotFound;
