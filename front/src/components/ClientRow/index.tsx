import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import styles from './style.module.scss';
import { ClientType } from '@/types';
import ColorDot from '../ColorDot';

type ClientRowProps = {
    client: ClientType;
};

const ClientRow: React.FC<ClientRowProps> = ({ client }) => {
    return (
        <Box className={styles.outterContainer}>
            <Box className={styles.innerContainer}>
                <Typography variant="h6" className={styles.innerText}>
                    {client.name}
                </Typography>
                <Typography variant="subtitle1" className={styles.innerTextSubtitle1}>
                    {client.email}
                </Typography>
            </Box>

            <Box className={styles.innerContainer}>
                <Typography variant="subtitle1" className={styles.innerText}>
                    {client.cpf}
                </Typography>
                <Typography variant="subtitle1" className={styles.innerTextSubtitle1}>
                    {client.phone}
                </Typography>
            </Box>

            <Box className={styles.innerContainer2}>
                <ColorDot status={client.status} />
                <Typography variant="subtitle1" className={styles.innerText}>
                    {client.status}
                </Typography>
            </Box>

            <Box className={styles.innerContainer3}>
                <Button className={styles.editButton} variant="outlined">
                    Editar
                </Button>
            </Box>
        </Box>
    );
};

export default ClientRow;
