import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiHandler from '@/utils/apiHandler';

// https://redux-toolkit.js.org/usage/usage-with-typescript#type-safety-with-extrareducers

// ------- FUNCTIONS -------
export const fetchUsers = createAsyncThunk('users/fetchAll', async () => {
    const response = await apiHandler('Get', 'user');
    return response.data;
});

export const createUser = createAsyncThunk('users/createUser', async (userData) => {
    const response = await apiHandler('Post', 'user', userData);
    return response.data;
});

// ------- INITIAL STATE -------
const initialState = {
    entities: [],
    loading: false,
    error: null as any,
};

// ------- SLICE -------
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.entities = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = true;
                state.error = action.error.message;
            })
            .addCase(createUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.entities.unshift(action.payload); // unsift() adds to the beginning of the array
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = true;
                state.error = action.error.message;
            });
    },
});

export default usersSlice.reducer;
