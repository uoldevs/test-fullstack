import { Customer } from '@/application/entities/customer'

export class CustomerView {
  static toHTTP(customer: Customer) {
    return {
      id: customer.id,
      name: customer.name,
      email: customer.email,
      document: customer.document,
      phone: customer.phone,
      status: customer.status,
      createdAt: customer.createdAt,
      updatedAt: customer.updatedAt,
    }
  }
}
