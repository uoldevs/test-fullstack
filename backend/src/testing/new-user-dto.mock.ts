import { UserStatus } from '../enum/userStatus.enum';
import { NewUserDTO } from '../user/dto/new-user.dto';

export const NewUserDTOMock: NewUserDTO = {
  name: 'John Doe',
  email: 'johndoe@email.com',
  cpf: '12345678900',
  phoneNumber: '11999999999',
  status: UserStatus.active,
};
