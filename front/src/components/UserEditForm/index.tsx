'use client';

import styles from './style.module.scss';
import { Box, Button, IconButton, MenuItem, TextField, Typography } from '@mui/material';
import { Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { deleteUser, updateUser } from '@/app/redux/slice/userSlice';
import { schema } from '../UserForm/Validation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { UserType } from '@/types';
import { AppDispatch } from '@/app/redux/store';
import DeleteIcon from '@mui/icons-material/Delete';
import { applyMask } from '@/utils/maskHandler';

interface UserEditFormProps {
    user: UserType;
}

const UserEditForm: React.FC<UserEditFormProps> = ({ user }) => {
    const dispatch: AppDispatch = useDispatch();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        defaultValues: user,
        resolver: yupResolver(schema) as Resolver<UserType>,
        mode: 'onChange',
    });

    useEffect(() => {
        if (user) {
            setValue('id', user.id);
            setValue('name', user.name);
            setValue('email', user.email);
            setValue('cpf', user.cpf);
            setValue('phone', user.phone);
            setValue('status', user.status);
            setSelect(user.status);
        }
    }, [user, setValue]);

    const onSubmit = (data: UserType) => {
        console.log(data);
        console.log(errors);
        dispatch(updateUser(data)).then(() => {
            router.push('/users');
        });
    };

    const onDelete = async () => {
        const userConfirmed = window.confirm('Deletar?');
        if (!userConfirmed) return;
        dispatch(deleteUser(user)).then(() => {
            router.push('/users');
        });
    };

    const [select, setSelect] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelect(event.target.value);
    };

    const handleMasking = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        let maskedValue;

        if (name === 'cpf') {
            maskedValue = applyMask(value, '999.999.999-99');
        } else if (name === 'phone') {
            maskedValue = applyMask(value, '(99) 9 9999-9999');
        } else {
            maskedValue = value;
        }

        setValue(name as keyof UserType, maskedValue);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
                <Box className={styles.userListHeader}>
                    <Box sx={{}}>
                        <Typography variant="h5">Editar usuário</Typography>
                        <Typography variant="subtitle1">Informe os campos a seguir para editar usuário</Typography>
                    </Box>
                </Box>
                <Box className={styles.form}>
                    <TextField
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                        label="Nome"
                        {...register('name')}
                        fullWidth
                        error={Boolean(errors.name)}
                    />
                    {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                    <TextField
                        InputLabelProps={{ shrink: true }}
                        margin="normal"
                        error={Boolean(errors.email)}
                        label="E-mail"
                        {...register('email')}
                        fullWidth
                    />
                    {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                    <TextField
                        InputLabelProps={{ shrink: true }}
                        label="CPF"
                        margin="normal"
                        {...register('cpf')}
                        fullWidth
                        error={Boolean(errors.cpf)}
                        onChange={handleMasking}
                    />
                    {errors.cpf && <span className={styles.error}>{errors.cpf.message}</span>}
                    <TextField
                        label="Telefone"
                        margin="normal"
                        {...register('phone')}
                        fullWidth
                        error={Boolean(errors.phone)}
                        InputLabelProps={{ shrink: true }}
                        onChange={handleMasking}
                    />
                    {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
                    <TextField
                        select
                        error={Boolean(errors.status)}
                        margin="normal"
                        label="Status"
                        {...register('status')}
                        fullWidth
                        value={select}
                        onChange={handleChange}
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
                        sx={{ backgroundColor: ' #c87a0d' }}
                        className={styles.newClientButton}
                    >
                        Salvar
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
                    <IconButton onClick={onDelete}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </Box>
        </form>
    );
};

export default UserEditForm;
