import { configureStore } from '@reduxjs/toolkit';

import customers from './customers';

export const store = configureStore({
  reducer: {
    customers,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
