import React from 'react';
import styles from './style.module.scss';
import { Box, Typography } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const ClienHeader = () => {
    return (
        <Box sx={{ marginBlock: '10px' }} className={styles.clientPanelHeader}>
            <PersonOutlineOutlinedIcon sx={{ fontSize: '40px' }} />
            <Typography variant="h4">Painel de clientes</Typography>
        </Box>
    );
};

export default ClienHeader;
