import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  Query,
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

  @Patch()
  @HttpCode(HttpStatus.OK)
  async update(
    @Body() data: CreateClientDto,
    @Query() querry: { clientId: string },
  ) {
    return await this.clientService.update(querry.clientId, data);
  }

  @Get()
  async findAllClientsAndStatus() {
    return this.clientService.findAllClientsAndStatus();
  }
}

export default ClientController;
