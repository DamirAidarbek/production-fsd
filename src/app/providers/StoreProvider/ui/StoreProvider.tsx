import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/store';

export const StoreProvider = ({ children }: {children: ReactNode}) => {
    const navigate = useNavigate();
    const store = createReduxStore(navigate);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
