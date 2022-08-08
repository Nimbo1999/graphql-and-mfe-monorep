import AppRoutes from '@constants/AppRoutes';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useCurrentRoute = () => {
    const location = useLocation();
};
