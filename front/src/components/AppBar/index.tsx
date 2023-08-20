'use client';

import React from 'react';
import styles from './style.module.scss';
import { AppBar } from '@mui/material';
import uol from '../../../public/uol.png';
import Image from 'next/image';

const AppBarCustom = () => {
    return (
        <AppBar sx={{ backgroundColor: 'black' }} className={styles.appBar}>
            <Image src={uol} alt="profile" height={50} />
        </AppBar>
    );
};

export default AppBarCustom;
