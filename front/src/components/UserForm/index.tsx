'use client';

import styles from './style.module.scss';
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import { schema } from './Validation';
import { Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { createUser } from '@/app/redux/slice/userSlice';
import { useRouter } from 'next/router';
import { UserType } from '@/types';
import { AppDispatch } from '@/app/redux/store';

const UserForm: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserType>({
        resolver: yupResolver(schema) as Resolver<UserType>,
        mode: 'onChange',
    });

    const onSubmit = (data: UserType) => {
        console.log(data);
        console.log(errors);
        dispatch(createUser(data)).then(() => {
            // Navigate to /users after a successful update
            router.push('/users');
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
                <Box className={styles.userListHeader}>
                    <Box sx={{}}>
                        <Typography variant="h5">Novo usuário</Typography>
                        <Typography variant="subtitle1">Informe os campos a seguir para criar novo usuário</Typography>
                    </Box>
                </Box>
                <Box className={styles.form}>
                    <TextField
                        margin="normal"
                        label="Nome"
                        {...register('name')}
                        fullWidth
                        error={Boolean(errors.name)}
                    />
                    {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                    <TextField
                        margin="normal"
                        error={Boolean(errors.email)}
                        label="E-mail"
                        {...register('email')}
                        fullWidth
                    />
                    {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                    <TextField label="CPF" margin="normal" {...register('cpf')} fullWidth error={Boolean(errors.cpf)} />
                    {errors.cpf && <span className={styles.error}>{errors.cpf.message}</span>}
                    <TextField
                        label="Telefone"
                        margin="normal"
                        {...register('phone')}
                        fullWidth
                        error={Boolean(errors.phone)}
                    />
                    {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
                    <TextField
                        select
                        error={Boolean(errors.status)}
                        margin="normal"
                        label="Status"
                        {...register('status')}
                        fullWidth
                    >
                        <MenuItem value="Ativo">Ativo</MenuItem>
                        <MenuItem value="Desativado">Desativado</MenuItem>
                        <MenuItem value="Aguardando ativação">Aguardando Ativação</MenuItem>
                        <MenuItem value="Inativo">Inativo</MenuItem>
                    </TextField>
                    {errors.status && <span className={styles.error}>{errors.status.message}</span>}
                </Box>
                <Box className={styles.buttonContainer}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ backgroundColor: ' #c87a0d', ':hover': { backgroundColor: '#c7862b' } }}
                        className={styles.newClientButton}
                    >
                        Criar
                    </Button>
                    <Button
                        href="/users"
                        variant="outlined"
                        sx={{
                            border: '1px solid #e29933',
                            backgroundColor: 'white',
                            color: '#e29933',
                            ':hover': { backgroundColor: '#e29933', color: 'white', border: '1px solid #e29933' },
                        }}
                    >
                        Voltar
                    </Button>
                </Box>
            </Box>
        </form>
    );
};

export default UserForm;
