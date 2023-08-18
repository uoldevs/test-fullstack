import ClientStatus from '../../../../../constants/ClientStatus';

export const allClientsMock = [
  {
    id: '6970e1a0-5a8d-4d7f-986f-600ced30e0ed',
    cpf: '40660379090',
    email: 'jonh_doe@gmail.com',
    name: 'Jonh Doe',
    phoneNumber: '21987676787',
    status: {
      name: ClientStatus.INATIVO,
    },
  },
  {
    id: '6b5cc1c0-bf12-4258-8533-91242d6c852b',
    cpf: '35594025065',
    email: 'uol@gmail.com',
    name: 'Uol',
    phoneNumber: '11987676787',
    status: {
      name: ClientStatus.ATIVO,
    },
  },
  {
    id: '9db05181-518f-4682-96fa-901029ff881a',
    cpf: '12777021015',
    email: 'pedro@gmail.com',
    name: 'Pedro',
    phoneNumber: '81987676787',
    status: {
      name: ClientStatus.DESATIVADO,
    },
  },
];

export const clientCreated = {
  id: '38740530-4ad4-42f5-92fd-d3a0101a766e',
  name: 'Pedro',
  email: 'jonh_doe_test@gmail.com',
  cpf: '40660379090',
  phoneNumber: '21987676787',
  status: {
    name: ClientStatus.INATIVO,
  },
};

export const clientToCeate = {
  name: 'Pedro',
  email: 'jonh_doe_test@gmail.com',
  cpf: '40660379090',
  phoneNumber: '21987676787',
  status: {
    name: ClientStatus.INATIVO,
  },
};
