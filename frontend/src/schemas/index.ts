import * as yup from 'yup';
import isValidCPF from '../utils/cpfValidator';

export const validationSchema = yup
  .object()
  .shape({
    name: yup
      .string()
      .required('Nome é obrigatório')
      .min(2, 'Nome precisa de pelo menos 2 letras'),
    email: yup
      .string()
      .required('E-mail é obrigatório')
      .email('Precisa ser um email válido'),
    cpf: yup
      .string()
      .matches(/^\d+$/, 'Apenas dígitos são permitidos')
      .required('CPF é obrigatório')
      .test('test-invalid-cpf', 'CPF inválido', (cpf) => isValidCPF(cpf)),
    phonenumber: yup
      .string()
      .matches(/^\d+$/, 'Apenas dígitos são permitidos')
      .required('Telefone é obrigatório')
      .min(10, 'Número inválido')
      .max(11, 'Número Inválido'),
    status: yup.string().required(),
  })
  .required();
