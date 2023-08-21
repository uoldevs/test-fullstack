'use client';

import styles from './style.module.scss';
import { Box, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Loading from '../Loading';
import { useDispatch, useSelector } from 'react-redux';
import UserRow from '../UserRow';
import { fetchUsers } from '@/app/redux/slice/userSlice';
import { AppDispatch, RootState } from '@/app/redux/store';

const UserTable = () => {
    const dispatch = useDispatch<AppDispatch>();
    const users = useSelector((state: RootState) => state.users.entities);
    const loading = useSelector((state: RootState) => state.users.loading);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <Box>
            <Box className={styles.userListHeader}>
                <Box sx={{}}>
                    <Typography variant="h5">Listagem de usuários</Typography>
                    <Typography variant="subtitle1" sx={{ color: 'gray' }}>
                        Escolha um usuário para visualizar os detalhes
                    </Typography>
                </Box>
                <Button
                    href="/users/new"
                    variant="contained"
                    sx={{ backgroundColor: '#e29933', ':hover': { backgroundColor: '#c7862b' } }}
                >
                    Novo cliente
                </Button>
            </Box>
            {loading && <Loading />}
            {!loading && (
                <Box>
                    {users.map((user: any) => (
                        <UserRow key={user.id} user={user} />
                    ))}
                </Box>
            )}
            <Typography variant="subtitle1" sx={{ color: 'gray' }}>
                Exibindo {users.length} clientes
            </Typography>
        </Box>
    );
};

export default UserTable;
