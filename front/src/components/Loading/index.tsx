import React from 'react';
import styles from './style.module.scss';

const Loading = () => {
    return (
        <div className={styles.spinnerContainer}>
            <div className={styles.spinner}>
                <div className={styles.spinnerInner} />
            </div>
        </div>
    );
};

export default Loading;
