import { Body, Controller, Post, Get, Param, Query, Put } from '@nestjs/common'
import { CustomerView } from '@/infrastructure/http/views/customer.view'
import { CreateCustomer } from '@/application/usecases/createCustomer'
import { GetAllCustomers } from '@/application/usecases/getAllCustomers'
import { GetCustomersById } from '@/application/usecases/getCustomerById'
import { UpdateCustomer } from '@/application/usecases/updateCustomer'
import { CreateCustomerDTO } from '@/infrastructure/http/dtos/createCustomer.dto'
import { UpdateCustomerDTO } from '../dtos/updateCustomer.dto'

@Controller('customer')
export class CustomerController {
  constructor(
    private createCustomer: CreateCustomer,
    private getAllCustomers: GetAllCustomers,
    private updateCustomer: UpdateCustomer,
    private getCustomersById: GetCustomersById,
  ) {}

  @Get()
  async getAll(
    @Query('page') page: string,
    @Query('quantity') quantity: string,
  ): Promise<{ customers: CustomerView[] }> {
    const response = await this.getAllCustomers.execute({
      page: page ? Number(page) : 1,
      quantity: quantity ? Number(quantity) : 10,
    })

    return {
      ...response,
      customers: response.customers.map(CustomerView.toHTTP),
    }
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<CustomerView> {
    const { customer } = await this.getCustomersById.execute({ id })
    return { customer: CustomerView.toHTTP(customer) }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateCustomerDTO) {
    const { document, email, name, phone, status } = body

    const { customer } = await this.updateCustomer.execute({
      id,
      props: {
        document,
        email,
        name,
        phone,
        status,
      },
    })

    return { customer: CustomerView.toHTTP(customer) }
  }

  @Post()
  async create(@Body() body: CreateCustomerDTO) {
    const { document, email, name, phone, status } = body

    const { customer } = await this.createCustomer.execute({
      document,
      email,
      name,
      phone,
      status,
    })

    return { customer: CustomerView.toHTTP(customer) }
  }
}
