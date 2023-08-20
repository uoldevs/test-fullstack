import { AppDataSource } from '../database/data-source';
import Status from '../database/entity/Status';
import User from '../database/entity/User'
import { TUserCreate, TUserUpdate } from '../schemas/user.schema'

export default class UserModel {
  constructor(
    private userRepository = AppDataSource.getRepository(User),
    private statusRepository = AppDataSource.getRepository(Status),
  ) { }

  public async findAll() {
    return await this.userRepository.find({ relations: ['status'] });
  }

  public async findOneBy(criteria: Partial<User>): Promise<User | null> {
    return await this.userRepository.findOneBy(criteria)
  }

  public async updateById(user: TUserUpdate) {
    const status = await this.getStatusByName(user.status)
    const userToUpdate = await this.findOneBy({ id: user.id! })

    if (!userToUpdate) {
      throw new Error('Usuário não encontrado');
    }

    userToUpdate!.name = user.name
    userToUpdate!.cpf = user.cpf
    userToUpdate!.phone = user.phone
    userToUpdate!.status = status!
    userToUpdate!.email = user.email

    return await this.userRepository.save(userToUpdate!);
  }

  public async create(user: TUserCreate) {
    const status = await this.getStatusByName(user.status)
    const newUser = new User()

    newUser.name = user.name
    newUser.cpf = user.cpf
    newUser.phone = user.phone
    newUser.status = status!
    newUser.email = user.email

    return await this.userRepository.save(newUser);
  }

  public async getStatusByName(name: string) {
    return await this.statusRepository.findOneBy({ name });
  }

  public async deleteById(id: number) {
    const user = await this.findOneBy({ id })

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    return await this.userRepository.remove(user!);
  }
}