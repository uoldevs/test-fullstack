import { Injectable } from '@nestjs/common'
import { CustomerRepository } from '@/application/repositories/customer.repository'
import { Customer, CustomerStatus } from '@/application/entities/customer'
import { CustomerNotFound } from '@/application/usecases/exceptions/CustomerNotFound'

interface UpdateCustomerRequest {
  id: string
  props: {
    name?: string
    email?: string
    document?: string
    phone?: string
    status?: CustomerStatus
  }
}

interface UpdateCustomerResponse {
  customer: Customer
}

@Injectable()
export class UpdateCustomer {
  private customerRespository: CustomerRepository

  constructor(customerRespository: CustomerRepository) {
    this.customerRespository = customerRespository
  }

  async execute(
    request: UpdateCustomerRequest,
  ): Promise<UpdateCustomerResponse> {
    const { id, props } = request

    const customer = await this.customerRespository.findById(id)

    if (!customer) throw new CustomerNotFound()

    customer.name = props.name ?? customer.name
    customer.document = props.document ?? customer.document
    customer.email = props.email ?? customer.email
    customer.phone = props.phone ?? customer.phone
    customer.status = props.status ?? (customer.status as CustomerStatus)
    customer.update()

    await this.customerRespository.update(customer)

    return { customer }
  }
}
