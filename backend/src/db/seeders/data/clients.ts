import ClientStatus from '../../../constants/ClientStatus';
import IClientStatus from '../../../interfaces/IClientStatus';

const clients: IClientStatus[] = [
  {
    cpf: '40660379090',
    email: 'jonh_doe@gmail.com',
    name: 'Jonh Doe',
    phoneNumber: '21987676787',
    status: {
      name: ClientStatus.ATIVO,
    },
  },
  {
    cpf: '35594025065',
    email: 'uol@gmail.com',
    name: 'Uol',
    phoneNumber: '11987676787',
    status: {
      name: ClientStatus.INATIVO,
    },
  },
  {
    cpf: '12777021015',
    email: 'pedro@gmail.com',
    name: 'Pedro',
    phoneNumber: '81987676787',
    status: {
      name: ClientStatus.DESATIVADO,
    },
  },
];

export default clients;
