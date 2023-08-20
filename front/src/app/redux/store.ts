import { configureStore } from '@reduxjs/toolkit';
import usersReducer, { UserState } from './slice/userSlice';

// ------- TYPES -------
export type RootState = {
    users: UserState;
};

export type AppDispatch = typeof store.dispatch;

// ------- STORE -------

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
});
