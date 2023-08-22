import { Customer as PrismaCustomer } from '@prisma/client'
import { Customer, CustomerStatus } from '@/application/entities/customer'

export class CustomerMapper {
  static toPrisma(customer: Customer) {
    return {
      id: customer.id,
      name: customer.name,
      document: customer.document,
      email: customer.email,
      phone: customer.phone,
      status: customer.status,
      createdAt: customer.createdAt,
      updatedAt: customer.updatedAt,
    }
  }

  static prismaToDomain(raw: PrismaCustomer) {
    return new Customer(
      {
        name: raw.name,
        document: raw.document,
        email: raw.email,
        phone: raw.phone,
        status: raw.status as CustomerStatus,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      raw.id,
    )
  }
}
