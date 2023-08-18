import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import './components.css';
import ColorDot from './ColorDot';
import { ClientType } from '@/types.ts';

type ClientRowProps = {
    client: ClientType;
};

const ClientRow: React.FC<ClientRowProps> = ({ client }) => {
    return (
        <Box className="outterContainer">
            <Box className="innerContainer">
                <Typography variant="h6" className="innerText">
                    {client.name}
                </Typography>
                <Typography variant="subtitle1" className="innerTextSubtitle1">
                    {client.email}
                </Typography>
            </Box>

            <Box className="innerContainer">
                <Typography variant="subtitle1" className="innerText">
                    {client.cpf}
                </Typography>
                <Typography variant="subtitle1" className="innerTextSubtitle1">
                    {client.phone}
                </Typography>
            </Box>

            <Box className="innerContainer2">
                <ColorDot status={client.status} />
                <Typography variant="subtitle1" className="innerText">
                    {client.status}
                </Typography>
            </Box>

            <Box className="innerContainer3">
                <Button variant="outlined" className="editButton s">
                    Editar
                </Button>
            </Box>
        </Box>
    );
};

export default ClientRow;
