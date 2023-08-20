import UserModel from "../model/user.model";
import { TUserCreate, TUserUpdate } from "../schemas/user.schema";

export default class UserService {
  constructor(
    private userModel = new UserModel()
  ) { }

  public async findAll() {
    return await this.userModel.findAll();
  }

  public async findById(id: number) {
    return await this.userModel.findOneBy({ id });
  }

  public async updateById(user: TUserUpdate) {
    await this.userModel.updateById(user);

    return await this.findById(user.id!)
  }

  public async create(user: TUserCreate) {
    return await this.userModel.create(user);
  }

  public async delete(id: number) {
    return await this.userModel.deleteById(id);
  }
}