import { UserStatus } from '../enum/userStatus.enum';
import { UpdatePutUserDto } from '../user/dto/update-put-user.dto';

export const updatePutUserDtoMock: UpdatePutUserDto = {
  name: 'update John Doe',
  email: 'johndoe@email.com',
  cpf: '12345678999',
  phoneNumber: '11999999999',
  status: UserStatus.disabled,
};
