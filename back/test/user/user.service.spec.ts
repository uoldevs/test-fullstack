import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../../src/modules/user/user.service';

describe('UserService', () => {
  let service: UserService;

  const mockUserRepository = {
    save: jest.fn(),
    find: jest.fn(),
    findOneBy: jest.fn(),
    // findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: 'UserRepository', useValue: mockUserRepository },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Create', () => {
    it('Create user: success', async () => {
      const payload = {
        name: 'John Doe',
        email: 'john_doe@test.com',
        cpf: '123.456.789-00',
        phone: '(11)99999-9999',
        status: 'Ativo',
      };
      mockUserRepository.save.mockReturnValueOnce(payload);
      const user = await service.create(payload);
      expect(user).toBe(payload);
    });

    it('Create user: fail', async () => {
      const payload = {
        name: 'John Doe',
        email: 'john_doe@test.com',
        phone: '(11)99999-9999',
        status: 'Ativo',
      };

      const expectedError = new Error('CPF is required');
      mockUserRepository.save.mockRejectedValueOnce(expectedError);
      await expect(service.create(payload as any)).rejects.toThrow(
        expectedError,
      );
    });
  });

  describe('Read', () => {
    it('Find All: success', async () => {
      const payload = [
        {
          name: 'John Doe',
          email: 'john_doe@test.com',
          phone: '(11)99999-9999',
          status: 'Ativo',
        },
        {
          name: 'Jone Doe',
          email: 'john_doe@test.com',
          phone: '(11)99999-9999',
          status: 'Ativo',
        },
      ];
      mockUserRepository.find.mockReturnValueOnce(payload);
      const user = await service.findAll();
      expect(user).toBe(payload);
    });

    it('Find One: success', async () => {
      const payload = {
        id: 1,
        name: 'Jone Doe',
        email: 'john_doe@test.com',
        phone: '(11)99999-9999',
        status: 'Ativo',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      };

      mockUserRepository.findOneBy.mockReturnValueOnce(payload);
      const user = await service.findOne(1);
      expect(user).toBe(payload);
    });

    it('Find One: fail', async () => {
      const expectedError = new Error('User not found');
      mockUserRepository.findOneBy.mockRejectedValueOnce(expectedError);
      await expect(service.findOne(-1)).rejects.toThrow(expectedError);
    });
  });

  // describe('Update', () => {
  //   it('Update user: success', async () => {
  //     const payload = {
  //       name: 'John Doe',
  //       email: 'john_doe@test.com',
  //       cpf: '123.456.789-00',
  //       phone: '(11)99999-9999',
  //       status: 'Ativo',
  //     };
  //     mockUserRepository.save.mockReturnValueOnce(payload);
  //     const user = await service.create(payload);
  //     expect(user).toBe(payload);
  //   });

  //   it('Update user: fail', async () => {
  //     const payload = {
  //       name: 'John Doe',
  //       email: 'john_doe@test.com',
  //       phone: '(11)99999-9999',
  //       status: 'Ativo',
  //     };

  //     const expectedError = new Error('CPF is required');
  //     mockUserRepository.save.mockRejectedValueOnce(expectedError);
  //     await expect(service.create(payload as any)).rejects.toThrow(
  //       expectedError,
  //     );
  //   });
  // });

  // describe('Delete', () => {
  //   it('Delete user: success', async () => {
  //     const payload = {
  //       name: 'John Doe',
  //       email: 'john_doe@test.com',
  //       cpf: '123.456.789-00',
  //       phone: '(11)99999-9999',
  //       status: 'Ativo',
  //     };
  //     mockUserRepository.save.mockReturnValueOnce(payload);
  //     const user = await service.create(payload);
  //     expect(user).toBe(payload);
  //   });

  //   it('Delete user: fail', async () => {
  //     const payload = {
  //       name: 'John Doe',
  //       email: 'john_doe@test.com',
  //       phone: '(11)99999-9999',
  //       status: 'Ativo',
  //     };

  //     const expectedError = new Error('CPF is required');
  //     mockUserRepository.save.mockRejectedValueOnce(expectedError);
  //     await expect(service.create(payload as any)).rejects.toThrow(
  //       expectedError,
  //     );
  //   });
  // });
});
