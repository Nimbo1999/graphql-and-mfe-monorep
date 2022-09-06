import { useNavigate } from '@solidjs/router';

const useGoBack = () => {
    const navigate = useNavigate();
    return () => navigate(-1);
};

export default useGoBack;
