import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import ClientService from './client.service';
import { CreateClientDto } from './dto/CreateClient.dto';
import ApiRoutes from 'src/constants/ApiRoutes';

@Controller(ApiRoutes.CLIENTS)
class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() data: CreateClientDto) {
    return await this.clientService.create(data);
  }

  @Get()
  async findAllClientsAndStatus() {
    return this.clientService.findAllClientsAndStatus();
  }
}

export default ClientController;
