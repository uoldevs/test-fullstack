'use client';

import styles from './style.module.scss';
import { Box, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Loading from '../Loading';
import { useDispatch, useSelector } from 'react-redux';
import ClientRow from '../ClientRow';
import { fetchUsers } from '@/app/redux/slice/userSlice';
import { AppDispatch, RootState } from '@/app/redux/store';

const ClientTable = () => {
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
                    <Typography variant="subtitle1">Escolha um usere para visualizar os detalhes</Typography>
                </Box>
                <Button
                    href="/users/new"
                    variant="contained"
                    sx={{ backgroundColor: ' #c87a0d' }}
                    className={styles.newClientButton}
                >
                    Novo user
                </Button>
            </Box>
            {loading && <Loading />}
            {!loading && (
                <Box>
                    {users.map((user: any) => (
                        <ClientRow key={user.id} user={user} />
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default ClientTable;
