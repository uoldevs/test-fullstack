import React from 'react';
import styles from './style.module.scss';
import { AppBar } from '@mui/material';
import Image from 'next/image';
import uolLogo from '../../../public/logo-uol.png';

const AppBarCustom = () => {
    return (
        <AppBar sx={{ backgroundColor: 'black' }} className={styles.appBar}>
            <img src="../../../public/logo-uol.png" alt="Logo" height={50} />
        </AppBar>
    );
};

export default AppBarCustom;
