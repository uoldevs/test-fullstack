import styles from './style.module.scss';
import AppBarCustom from '@/components/AppBar';
import ClienHeader from '@/components/UserHeader';
import UserTable from '@/components/UserTable';
import { Box, Divider } from '@mui/material';

export default function Users() {
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
