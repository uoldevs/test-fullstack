import styles from './style.module.scss';
import AppBarCustom from '@/components/AppBar';
import ClienHeader from '@/components/ClientHeader';
import ClientTable from '@/components/ClientTable';
import { Box, Divider } from '@mui/material';

export default function Clients() {
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
