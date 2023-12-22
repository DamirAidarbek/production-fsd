import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { countReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { StateSchema } from './StateSchema';

export function createReduxStore() {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: countReducer,
        user: userReducer,
        login: loginReducer,
    };

    const store = configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
    });

    return store;
}
