import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slice/userSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
});
