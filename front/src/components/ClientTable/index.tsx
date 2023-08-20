'use client';

import styles from './style.module.scss';
import { Box, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Loading from '../Loading';
import { useDispatch, useSelector } from 'react-redux';
import ClientRow from '../ClientRow';
import { fetchUsers } from '@/app/redux/slice/userSlice';

const ClientTable = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.entities);
    const loading = useSelector((state) => state.users.loading);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <Box>
            <Box className={styles.userListHeader}>
                <Box sx={{}}>
                    <Typography variant="h5">Listagem de usuários</Typography>
                    <Typography variant="subtitle1">Escolha um cliente para visualizar os detalhes</Typography>
                </Box>
                <Button
                    href="/clients/new"
                    variant="contained"
                    sx={{ backgroundColor: ' #c87a0d' }}
                    className={styles.newClientButton}
                >
                    Novo cliente
                </Button>
            </Box>
            {loading && <Loading />}
            {!loading && (
                <Box>
                    {users.map((client: any) => (
                        <ClientRow key={client.id} client={client} />
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default ClientTable;
