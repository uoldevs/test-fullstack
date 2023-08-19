'use client';
import './globals.css';
import styles from './style.module.scss';
import { Box, Divider } from '@mui/material';
import '@fontsource/roboto/300.css';
import ClientTable from '@/components/ClientTable';
import ClienHeader from '@/components/ClientHeader';
import AppBarCustom from '@/components/AppBar';

export default function Home() {
    return (
        <Box>
            <AppBarCustom />
            <Box sx={{ marginTop: '125px' }} className={styles.mainContainer}>
                <ClienHeader />
                <Divider />
                <ClientTable />
            </Box>
        </Box>
    );
}
