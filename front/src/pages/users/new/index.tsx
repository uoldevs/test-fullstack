import UserForm from '@/components/UserForm';
import React from 'react';
import styles from './style.module.scss';
import { Box, Divider } from '@mui/material';
import AppBarCustom from '@/components/AppBar';
import ClienHeader from '@/components/UserHeader';
// import store from '@/store';

const NewUser = () => {
    return (
        <div>
            <Box>
                <AppBarCustom />
                <Box sx={{ marginTop: '125px' }} className={styles.mainContainer}>
                    <ClienHeader />

                    <Divider />

                    <UserForm />
                </Box>
            </Box>
        </div>
    );
};

export default NewUser;
