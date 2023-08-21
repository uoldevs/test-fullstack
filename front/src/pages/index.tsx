'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Box, Divider } from '@mui/material';
import AppBarCustom from '@/components/AppBar';
import ClienHeader from '@/components/UserHeader';
import UserTable from '@/components/UserTable';
import styles from './style.module.scss';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push('/users');
    });

    return (
        <Box>
            <AppBarCustom />
            <Box sx={{ marginTop: '125px' }} className={styles.mainContainer}>
                <ClienHeader />

                <Divider />

                <UserTable />
            </Box>
        </Box>
    );
}
