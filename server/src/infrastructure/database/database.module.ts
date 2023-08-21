import { Module } from '@nestjs/common'
import { CustomerRepository } from '@/application/repositories/customer.repository'
import { PrismaService } from '@/infrastructure/database/prisma/prisma.service'
import { PrismaCustomerRepository } from '@/infrastructure/database/prisma/repositories/prisma.customer.repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: CustomerRepository,
      useClass: PrismaCustomerRepository,
    },
  ],
  exports: [CustomerRepository],
})
export class DatabaseModule {}
