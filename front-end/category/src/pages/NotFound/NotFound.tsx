import { Button, Result } from 'antd';

const NotFound: React.FC = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Button type="primary" onClick={() => alert('Hey')}>
                    Back Home
                </Button>
            }
        />
    );
};

export default NotFound;
