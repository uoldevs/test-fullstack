import { Module } from '@nestjs/common'
import { DatabaseModule } from '@/infrastructure/database/database.module'
import { CustomerController } from '@/infrastructure/http/controllers/costumer.controller'
import { GetAllCustomers } from '@/application/usecases/getAllCustomers'
import { CreateCustomer } from '@/application/usecases/createCustomer'
import { UpdateCustomer } from '@/application/usecases/updateCustomer'
import { GetCustomersById } from '@/application/usecases/getCustomerById'

@Module({
  imports: [DatabaseModule],
  controllers: [CustomerController],
  providers: [
    GetAllCustomers,
    CreateCustomer,
    UpdateCustomer,
    GetCustomersById,
  ],
})
export class HttpModule {}
