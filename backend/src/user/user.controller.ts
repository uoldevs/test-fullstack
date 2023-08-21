import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { NewUserDTO } from './dto/new-user.dto';
import { UserService } from './user.service';
import { ParamId } from '../decorators/param-id.decorator';
import { UpdatePutUserDto } from './dto/update-put-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: NewUserDTO) {
    return this.userService.createNewUser(data);
  }

  @Get()
  async list() {
    return this.userService.listAllUsers();
  }

  @Get(':id')
  async showOneById(@ParamId() id: number) {
    return this.userService.showOneUserById(id);
  }

  @Put(':id')
  async update(@Body() data: UpdatePutUserDto, @ParamId() id: number) {
    return this.userService.updateUser(id, data);
  }

  @Delete(':id')
  async delete(@ParamId() id: number) {
    return this.userService.deleteUser(id);
  }
}
