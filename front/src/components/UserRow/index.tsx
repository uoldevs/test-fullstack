import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import styles from './style.module.scss';
import ColorDot from '../ColorDot';
import { UserType } from '@/types';

type UserRowProps = {
    user: UserType;
};

const UserRow: React.FC<UserRowProps> = ({ user }) => {
    return (
        <Box className={styles.outterContainer}>
            <Box className={styles.innerContainer}>
                <Typography variant="h6" className={styles.innerText}>
                    {user.name}
                </Typography>
                <Typography variant="subtitle1" className={styles.innerTextSubtitle1}>
                    {user.email}
                </Typography>
            </Box>

            <Box className={styles.innerContainer}>
                <Typography variant="subtitle1" className={styles.innerText}>
                    {user.cpf}
                </Typography>
                <Typography variant="subtitle1" className={styles.innerTextSubtitle1}>
                    {user.phone}
                </Typography>
            </Box>

            <Box className={styles.innerContainer2}>
                <ColorDot status={user.status} />
                <Typography variant="subtitle1" className={styles.innerText}>
                    {user.status}
                </Typography>
            </Box>

            <Box className={styles.innerContainer3}>
                <Button
                    href={`/users/${user.id}/edit`}
                    sx={{
                        border: '1px solid #e29933',
                        backgroundColor: 'white',
                        color: '#e29933',
                        ':hover': { backgroundColor: '#e29933', color: 'white', border: '1px solid #e29933' },
                    }}
                    variant="outlined"
                >
                    Editar
                </Button>
            </Box>
        </Box>
    );
};

export default UserRow;
