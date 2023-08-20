import AppBarCustom from '@/components/AppBar';
import ClienHeader from '@/components/UserHeader';
import styles from './style.module.scss';
import { Box, Divider } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { AppDispatch, RootState } from '@/app/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, getUserById } from '@/app/redux/slice/userSlice';
import UserEditForm from '@/components/UserEditForm';

const EditUser: React.FC<{ data: any }> = ({ data }) => {
    const router = useRouter();
    const { id } = router.query;

    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.users.entity);

    useEffect(() => {
        if (id) {
            dispatch(getUserById(id));
        }
    }, [dispatch, id]);

    return (
        <div>
            <Box>
                <AppBarCustom />
                <Box sx={{ marginTop: '125px' }} className={styles.mainContainer}>
                    <ClienHeader />

                    <Divider />

                    <UserEditForm user={user} />
                </Box>
            </Box>
        </div>
    );
};

export default EditUser;
