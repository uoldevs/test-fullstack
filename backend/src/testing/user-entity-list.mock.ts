import { UserStatus } from '../enum/userStatus.enum';
import { UserEntity } from '../user/entity/user.entity';

export const userEntityList: UserEntity[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@email.com',
    cpf: '12345678900',
    phoneNumber: '11999999999',
    status: UserStatus.active,
  },
  {
    id: 2,
    name: 'John Doe 2',
    email: 'johndoe2@email.com',
    cpf: '12345678901',
    phoneNumber: '11999999999',
    status: UserStatus.inactive,
  },
  {
    id: 3,
    name: 'John Doe 3',
    email: 'johndoe3@email.com',
    cpf: '12345678902',
    phoneNumber: '11999999999',
    status: UserStatus.waitingActivation,
  },
  {
    id: 4,
    name: 'John Doe 4',
    email: 'johndoe4@email.com',
    cpf: '12345678903',
    phoneNumber: '11999999999',
    status: UserStatus.disabled,
  },
];
