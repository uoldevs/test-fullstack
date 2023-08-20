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
import ApiRoutes from '../../../constants/ApiRoutes';
import { UpdateClientDto } from './dto/UpdateClient.dto';

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
    @Body() data: UpdateClientDto,
    @Query() querry: { clientId: string },
  ) {
    return await this.clientService.update(querry.clientId, data);
  }

  @Get()
  async findAllClientsAndStatus(@Query() querry: { clientId?: string }) {
    if (querry.clientId) {
      return this.clientService.findById(querry.clientId);
    }

    return this.clientService.findAllClientsAndStatus();
  }
}

export default ClientController;
