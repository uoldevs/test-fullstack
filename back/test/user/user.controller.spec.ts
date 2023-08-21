import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../../src/modules/user/user.controller';
import { UserService } from '../../src/modules/user/user.service';

describe('UserController', () => {
  let controller: UserController;
  // let mockUserService: UserService;

  const mockUserService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        { provide: UserService, useValue: mockUserService },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Create', () => {
    it('should create and return a user', async () => {
      const newUser = {
        name: 'John Doe',
        email: 'john_doe@test.com',
        cpf: '123.456.789-00',
        phone: '(11)99999-9999',
        status: 'Ativo',
      };
      const expectedUser = { id: 1, name: 'John Doe' };

      mockUserService.create.mockResolvedValueOnce(expectedUser);

      expect(await controller.create(newUser)).toEqual(expectedUser);
      expect(mockUserService.create).toHaveBeenCalledWith(newUser);
    });
  });

  describe('Read', () => {
    it('should return all users', async () => {
      const expectedUsers = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
      ];

      mockUserService.findAll.mockResolvedValueOnce(expectedUsers);

      expect(await controller.findAll()).toEqual(expectedUsers);
      expect(mockUserService.findAll).toHaveBeenCalled();
    });
  });

  describe('Read', () => {
    it('should return a user by ID', async () => {
      const expectedUser = { id: 1, name: 'John Doe' };

      mockUserService.findOne.mockResolvedValueOnce(expectedUser);

      expect(await controller.findOne('1')).toEqual(expectedUser);
      expect(mockUserService.findOne).toHaveBeenCalledWith(1);
    });
  });

  describe('Update', () => {
    it('should update and return the user', async () => {
      const updatedData = { name: 'Jane Doe' };
      const expectedUser = { id: 1, name: 'Jane Doe' };

      mockUserService.update.mockResolvedValueOnce(expectedUser);

      expect(await controller.update('1', updatedData)).toEqual(expectedUser);
      expect(mockUserService.update).toHaveBeenCalledWith(1, updatedData);
    });
  });

  describe('Delete', () => {
    it('should remove a user by ID', async () => {
      mockUserService.remove.mockResolvedValueOnce(1);
      await controller.remove('1');
      expect(mockUserService.remove).toHaveBeenCalledWith(1);
    });
  });
});
