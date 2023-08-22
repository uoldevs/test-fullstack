import { Injectable } from '@nestjs/common'
import { CustomerRepository } from '@/application/repositories/customer.repository'
import { Customer, CustomerStatus } from '@/application/entities/customer'

interface CreateCustomerRequest {
  name: string
  email: string
  document: string
  phone: string
  status: CustomerStatus
}

interface CreateCustomerResponse {
  customer: Customer
}

@Injectable()
export class CreateCustomer {
  private customerRespository: CustomerRepository

  constructor(customerRespository: CustomerRepository) {
    this.customerRespository = customerRespository
  }

  async execute(
    request: CreateCustomerRequest,
  ): Promise<CreateCustomerResponse> {
    const { name, document, email, phone, status } = request

    const customer = new Customer({
      name,
      document,
      email,
      phone,
      status,
    })

    await this.customerRespository.create(customer)

    return { customer }
  }
}
