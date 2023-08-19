'use client';

import styles from './style.module.scss';
import { Box, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import apiHandler from '@/utils/apiHandler';
import { ClientType } from '@/types';
import ClientRow from '../ClientRow';
import Loading from '../Loading';

const clientsMock = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john_doe@test.com',
        cpf: '123.456.789-00',
        phone: '(11)99999-9999',
        status: 'Ativo',
        createdAt: '',
        updatedAt: '',
        deletedAt: '',
    },
    {
        id: 2,
        name: 'John Doe',
        email: 'john_doe@test.com',
        cpf: '123.456.789-00',
        phone: '(11)99999-9999',
        status: 'Inativo',
        createdAt: '',
        updatedAt: '',
        deletedAt: '',
    },
    {
        id: 2,
        name: 'John Doe',
        email: 'john_doe@test.com',
        cpf: '123.456.789-00',
        phone: '(11)99999-9999',
        status: 'Aguardando ativação',
        createdAt: '',
        updatedAt: '',
        deletedAt: '',
    },
    {
        id: 2,
        name: 'John Doe',
        email: 'john_doe@test.com',
        cpf: '123.456.789-00',
        phone: '(11)99999-9999',
        status: 'Desativado',
        createdAt: '',
        updatedAt: '',
        deletedAt: '',
    },
];

const ClientTable = () => {
    const [loading, setLoading] = useState(true);
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const { data } = await apiHandler('GET', `user`);
            setClients(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };
    return (
        <Box>
            <Box className={styles.userListHeader}>
                <Box sx={{}}>
                    <Typography variant="h5">Listagem de usuários</Typography>
                    <Typography variant="subtitle1">Escolha um cliente para visualizar os detalhes</Typography>
                </Box>
                <Button variant="contained" sx={{ backgroundColor: ' #c87a0d' }} className={styles.newClientButton}>
                    Novo cliente
                </Button>
            </Box>
            {loading && <Loading />}
            {!loading && (
                <Box>
                    {clients.map((client: ClientType) => (
                        <ClientRow key={client.id} client={client} />
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default ClientTable;
