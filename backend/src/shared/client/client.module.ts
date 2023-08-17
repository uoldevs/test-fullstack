import { Module } from '@nestjs/common';
import ClientService from './client.service';
import ClientRepository from './client.repository';
import ClientController from './client.controller';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  imports: [],
  controllers: [ClientController],
  providers: [ClientService, ClientRepository, PrismaService],
})
export class ClientModule {}
