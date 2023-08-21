import { Test, TestingModule } from '@nestjs/testing';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';

import { userRepositoryMock } from '../testing/user-repository.mock';
import { userEntityList } from '../testing/user-entity-list.mock';
import { NewUserDTOMock } from '../testing/new-user-dto.mock';
import { updatePutUserDtoMock } from '../testing/update-put-user-dto.mock';

describe('UserService unit test', () => {
  let userService: UserService;
  let userRepository: Repository<UserEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, userRepositoryMock],
    }).compile();

    userService = module.get<UserService>(UserService);
    userRepository = module.get(getRepositoryToken(UserEntity));
  });

  test('modules definition', () => {
    expect(userService).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  describe('createNewUser method', () => {
    test('SUCCESS on create new user', async () => {
      jest.spyOn(userRepository, 'exist').mockResolvedValueOnce(false);

      const result = await userService.createNewUser(NewUserDTOMock);

      expect(result).toEqual(userEntityList[0]);
    });

    test('FAILURE on create new user', async () => {
      jest.spyOn(userRepository, 'exist').mockResolvedValueOnce(true);

      await expect(userService.createNewUser(NewUserDTOMock)).rejects.toEqual(
        new BadRequestException('cpf já existente'),
      );
    });
  });

  describe('listAllUsers method', () => {
    test('SUCCESS on list all users', async () => {
      const result = await userService.listAllUsers();

      expect(result).toEqual(userEntityList);
    });
  });

  describe('showOneUserById method', () => {
    test('SUCCESS on list user by id', async () => {
      const result = await userService.showOneUserById(1);

      expect(result).toEqual(userEntityList[0]);
    });

    test('FAILURE on list user by id', async () => {
      jest.spyOn(userRepository, 'exist').mockResolvedValueOnce(false);

      await expect(userService.showOneUserById(1)).rejects.toEqual(
        new NotFoundException('Usuário não encontrado'),
      );
    });
  });

  describe('updateUser method', () => {
    test('SUCCESS on update user', async () => {
      jest.spyOn(userRepository, 'exist').mockResolvedValueOnce(true);
      jest.spyOn(userRepository, 'exist').mockResolvedValueOnce(false);

      const result = await userService.updateUser(1, updatePutUserDtoMock);

      expect(result).toEqual({ success: true });
    });

    test('FAILURE on update non-existent user', async () => {
      jest.spyOn(userRepository, 'exist').mockResolvedValueOnce(false);

      await expect(
        userService.updateUser(1, updatePutUserDtoMock),
      ).rejects.toEqual(new NotFoundException('Usuário não encontrado'));
    });

    test('FAILURE on update user with existing CPF', async () => {
      jest.spyOn(userRepository, 'exist').mockResolvedValueOnce(true);
      jest.spyOn(userRepository, 'exist').mockResolvedValueOnce(true);

      await expect(
        userService.updateUser(1, updatePutUserDtoMock),
      ).rejects.toEqual(new NotFoundException('cpf já existente'));
    });
  });

  describe('deleteUser method', () => {
    test('SUCCESS on delete user', async () => {
      const result = await userService.deleteUser(1);

      expect(result).toEqual({ success: true });
    });

    test('FAILURE on delete user', async () => {
      jest.spyOn(userRepository, 'exist').mockResolvedValueOnce(false);

      await expect(userService.deleteUser(1)).rejects.toEqual(
        new NotFoundException('Usuário não encontrado'),
      );
    });
  });
});
