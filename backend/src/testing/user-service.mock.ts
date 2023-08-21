import { UserService } from '../user/user.service';
import { userEntityList } from './user-entity-list.mock';

export const userServiceMock = {
  provide: UserService,
  useValue: {
    createNewUser: jest.fn().mockResolvedValue(userEntityList[0]),
    listAllUsers: jest.fn().mockResolvedValue(userEntityList),
    showOneUserById: jest.fn().mockResolvedValue(userEntityList[0]),
    updateUser: jest.fn().mockResolvedValue({ success: true }),
    updatePartialUser: jest.fn().mockResolvedValue({ success: true }),
    deleteUser: jest.fn().mockResolvedValue({ success: true }),
  },
};
