import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateCustomerDto) {
    return this.prismaService.customer.create({ data });
  }

  async findAll() {
    return this.prismaService.customer.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    return this.prismaService.customer.findUniqueOrThrow({ where: { id } });
  }

  async update(id: number, data: UpdateCustomerDto) {
    return this.prismaService.customer.update({ where: { id }, data });
  }
}
