import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import IClientStatus from 'src/interfaces/IClientStatus';
import ClientService from './client.service';

@Controller('/clients')
class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() data: IClientStatus) {
    return await this.clientService.create(data);
  }

  @Get()
  async findAllClientsAndStatus() {
    return this.clientService.findAllClientsAndStatus();
  }
}

export default ClientController;
