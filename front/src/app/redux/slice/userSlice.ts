import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiHandler from '@/utils/apiHandler';
import { UserType } from '@/types';

// https://redux-toolkit.js.org/tutorials/typescript

// ------- TYPES -------
export type UserState = {
    entities: UserType[];
    entity: UserType;
    loading: boolean;
    error: string | null | undefined;
};

// ------- FUNCTIONS -------
export const fetchUsers = createAsyncThunk('users/fetchAll', async () => {
    const { data } = await apiHandler('Get', 'user');
    return data;
});
export const createUser = createAsyncThunk('users/createUser', async (userData: UserType) => {
    const { data } = await apiHandler('Post', 'user', userData);
    return data;
});
export const getUserById = createAsyncThunk('users/fetchUser', async (userId) => {
    const { data } = await apiHandler('Get', `user/${userId}`);
    return data;
});
export const updateUser = createAsyncThunk('users/updateUser', async (userData: UserType) => {
    const { data } = await apiHandler('Patch', `user/${userData.id}`, userData);
    return data;
});

// ------- INITIAL STATE -------
const initialState: UserState = {
    entities: [] as UserType[],
    entity: {} as UserType,
    loading: false,
    error: null,
};

// ------- SLICE -------
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},

    // https://redux-toolkit.js.org/usage/usage-with-typescript#type-safety-with-extrareducers
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
            })
            .addCase(getUserById.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUserById.fulfilled, (state, action) => {
                state.loading = false;
                state.entity = action.payload;
            })
            .addCase(getUserById.rejected, (state, action) => {
                state.loading = true;
                state.error = action.error.message;
            })
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                state.entity = action.payload;
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = true;
                state.error = action.error.message;
            });
    },
});

export default usersSlice.reducer;
