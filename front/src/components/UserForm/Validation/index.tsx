import { CPFValidation } from '@/utils/CPFValidation';
import * as yup from 'yup';

declare module 'yup' {
    interface StringSchema {
        cpf(message?: string): this;
    }
}

yup.addMethod(yup.string, 'cpf', function (message) {
    return this.test('cpf', message, function (value) {
        const { path, createError } = this;

        if (typeof value === 'undefined' || value === null) {
            return createError({ path, message: 'CPF é obrigatório' });
        }

        const valid = CPFValidation(value);

        return valid || createError({ path, message: 'CPF inválido' });
    });
});

export const schema = yup.object().shape({
    id: yup.number().nullable().notRequired(),
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    cpf: yup
        .string()
        .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido. Formato esperado: 999.999.999-99')
        .cpf('CPF inválido')
        .required('CPF é obrigatório'),
    phone: yup
        .string()
        .matches(/^\(\d{2}\) \d? ?\d{4}-\d{4}$/, 'Telefone inválido. Formato esperado: (99) 9 9999-9999')
        .required('Telefone é obrigatório'),
    status: yup.string().required('Status é obrigatório'),
    createdAt: yup.string().nullable().notRequired(),
    updatedAt: yup.string().nullable().notRequired(),
    deletedAt: yup.string().nullable().notRequired(),
});
