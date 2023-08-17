import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userServiceMock } from '../testing/user-service.mock';
import { NewUserDTOMock } from '../testing/new-user-dto.mock';
import { userEntityList } from '../testing/user-entity-list.mock';
import { updatePutUserDtoMock } from '../testing/update-put-user-dto.mock';

describe('UserController unit test', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [userServiceMock],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  test('modules definition', () => {
    expect(userController).toBeDefined();
    expect(userService).toBeDefined();
  });

  describe('Create', () => {
    test('SUCCESS on create method', async () => {
      const result = await userController.create(NewUserDTOMock);
      expect(result).toEqual(userEntityList[0]);
    });
  });

  describe('Read', () => {
    test('SUCCESS on list method', async () => {
      const result = await userController.list();
      expect(result).toEqual(userEntityList);
    });
    test('SUCCESS on showOneById method', async () => {
      const result = await userController.showOneById(1);
      expect(result).toEqual(userEntityList[0]);
    });
  });

  describe('Update', () => {
    test('SUCCESS on update method', async () => {
      const result = await userController.update(updatePutUserDtoMock, 1);
      expect(result).toEqual({ success: true });
    });
  });

  describe('Delete', () => {
    test('SUCCESS on deleted method', async () => {
      const result = await userController.delete(1);
      expect(result).toEqual({ success: true });
    });
  });
});
