import { Customer } from '@/application/entities/customer'
import { CustomerRepository } from '@/application/repositories/customer.repository'

export class MockCustomerRepository implements CustomerRepository {
  public customers: Customer[] = []

  async count(): Promise<number> {
    return this.customers.length
  }

  async getAll(page = 0, quantity = 10): Promise<Customer[]> {
    return this.customers.splice(page, quantity)
  }

  async create(customer: Customer): Promise<void> {
    this.customers.push(customer)
  }

  async update(customer: Customer): Promise<void> {
    const index = this.customers.findIndex((c) => c.id === customer.id)

    if (index !== -1) {
      this.customers[index] = customer
    }
  }

  async findById(customerId: string): Promise<Customer | null> {
    return this.customers.find((c) => c.id === customerId) || null
  }
}
