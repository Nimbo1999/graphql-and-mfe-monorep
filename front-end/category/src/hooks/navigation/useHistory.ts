import { useContext } from 'react';
import { UNSAFE_NavigationContext } from 'react-router-dom';
import { MemoryHistory } from 'history';

export const useHistory = (): MemoryHistory => {
    const history = useContext(UNSAFE_NavigationContext).navigator as MemoryHistory;
    return history;
};
