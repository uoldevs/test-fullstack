import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import './components.css';
import ColorDot from './ColorDot';

const data = {
    name: 'John Doe',
    email: 'john_doe@test.com',
    cpf: '123.456.789-00',
    phone: '(11)99999-9999',
    status: 'Ativo',
    createdAt: '',
    updatedAt: '',
    deletedAt: '',
};

const ClientRow = () => {
    return (
        <Box className="outterContainer">
            <Box className="innerContainer">
                <Typography variant="h6" className="innerText">
                    {data.name}
                </Typography>
                <Typography variant="subtitle1" className="innerTextSubtitle1">
                    {data.email}
                </Typography>
            </Box>

            <Box>
                <Typography variant="subtitle1" className="innerText">
                    {data.cpf}
                </Typography>
                <Typography variant="subtitle1" className="innerTextSubtitle1">
                    {data.phone}
                </Typography>
            </Box>

            <Box className="innerContainer2">
                <ColorDot status={data.status} />
                <Typography variant="subtitle1" className="innerText">
                    {data.status}
                </Typography>
            </Box>

            <Button variant="outlined" className="editButton s">
                Editar
            </Button>
        </Box>
    );
};

export default ClientRow;
