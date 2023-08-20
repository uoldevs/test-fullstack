import * as yup from 'yup';

export const schema = yup.object().shape({
    id: yup.number().nullable().notRequired(),
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    cpf: yup
        .string()
        .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido. Formato esperado: 999.999.999-99')
        .required('CPF é obrigatório'),
    phone: yup
        .string()
        .matches(
            /^\(\d{2}\) \d? ?\d{4}-\d{4}$/,
            'Telefone inválido. Formato esperado: (99) 9 9999-9999 ou (99) 9999-9999',
        )
        .required('Telefone é obrigatório'),
    status: yup.string().required('Status é obrigatório'),
    createdAt: yup.string().nullable().notRequired(),
    updatedAt: yup.string().nullable().notRequired(),
    deletedAt: yup.string().nullable().notRequired(),
});
