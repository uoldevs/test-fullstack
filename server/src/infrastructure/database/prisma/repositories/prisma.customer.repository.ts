import { Injectable } from '@nestjs/common'
import { Customer } from '@/application/entities/customer'
import { CustomerRepository } from '@/application/repositories/customer.repository'
import { PrismaService } from '@/infrastructure/database/prisma/prisma.service'
import { CustomerMapper } from '@/infrastructure/database/mapper/customer.mapper'

@Injectable()
export class PrismaCustomerRepository implements CustomerRepository {
  private db: PrismaService

  constructor(prismaService: PrismaService) {
    this.db = prismaService
  }

  async count(): Promise<number> {
    return this.db.customer.count()
  }

  async update(customer: Customer): Promise<void> {
    const raw = CustomerMapper.toPrisma(customer)

    await this.db.customer.update({
      where: { id: customer.id },
      data: raw,
    })
  }

  async findById(customerId: string): Promise<Customer | null> {
    const customer = await this.db.customer.findFirst({
      where: { id: customerId },
    })

    if (!customer) return null

    return CustomerMapper.prismaToDomain(customer)
  }

  async getAll(page = 1, quantity = 10): Promise<Customer[]> {
    const skip = (page - 1) * quantity

    const customers = await this.db.customer.findMany({
      skip,
      take: quantity,
      orderBy: { createdAt: 'desc' },
    })

    return customers.map(CustomerMapper.prismaToDomain)
  }

  async create(customer: Customer): Promise<void> {
    const raw = CustomerMapper.toPrisma(customer)
    await this.db.customer.create({ data: raw })
  }
}
