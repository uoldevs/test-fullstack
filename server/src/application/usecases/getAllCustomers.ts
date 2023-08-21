import { Injectable } from '@nestjs/common'
import { CustomerRepository } from '@/application/repositories/customer.repository'
import { Customer } from '@/application/entities/customer'

interface GetAllCustomersRequest {
  page: number
  quantity: number
}

interface GetAllCustomersResponse {
  customers: Customer[]
  quantity: number
  page: number
  total: number
}

@Injectable()
export class GetAllCustomers {
  private customerRespository: CustomerRepository

  constructor(customerRespository: CustomerRepository) {
    this.customerRespository = customerRespository
  }

  async execute({
    page,
    quantity,
  }: GetAllCustomersRequest): Promise<GetAllCustomersResponse> {
    const count = await this.customerRespository.count()
    const customers = await this.customerRespository.getAll(page, quantity)

    return { customers, page, quantity, total: count }
  }
}
