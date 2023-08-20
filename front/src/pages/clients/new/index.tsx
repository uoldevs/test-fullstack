import ClientForm from '@/components/ClientForm';
import React from 'react';
import styles from './style.module.scss';
import { Box, Divider } from '@mui/material';
import AppBarCustom from '@/components/AppBar';
import ClienHeader from '@/components/ClientHeader';
// import store from '@/store';

const NewClient = () => {
    return (
        <div>
            <Box>
                <AppBarCustom />
                <Box sx={{ marginTop: '125px' }} className={styles.mainContainer}>
                    <ClienHeader />

                    <Divider />

                    <ClientForm />
                </Box>
            </Box>
        </div>
    );
};

export default NewClient;
