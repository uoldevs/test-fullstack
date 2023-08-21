import { Injectable } from '@nestjs/common'
import { CustomerRepository } from '@/application/repositories/customer.repository'
import { Customer } from '@/application/entities/customer'
import { CustomerNotFound } from './exceptions/CustomerNotFound'

interface GetCustomersByIdRequest {
  id: string
}

interface GetCustormerByIdResponse {
  customer: Customer
}

@Injectable()
export class GetCustomersById {
  private customerRespository: CustomerRepository

  constructor(customerRespository: CustomerRepository) {
    this.customerRespository = customerRespository
  }

  async execute({
    id,
  }: GetCustomersByIdRequest): Promise<GetCustormerByIdResponse> {
    const customer = await this.customerRespository.findById(id)

    if (!customer) throw new CustomerNotFound()

    return { customer }
  }
}
