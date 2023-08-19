import React from 'react';

import styles from './style.module.scss';
import { Box } from '@mui/material';

const Loading = () => {
    return (
        <Box className={styles.spinnerContainer}>
            <Box className={styles.spinner}>
                <Box className={styles.spinnerInner} />
            </Box>
        </Box>
    );
};

export default Loading;
