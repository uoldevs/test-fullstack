import { Customer } from '@/application/entities/customer'

export abstract class CustomerRepository {
  abstract getAll(page: number, quantity: number): Promise<Customer[]>
  abstract create(customer: Customer): Promise<void>
  abstract update(customer: Customer): Promise<void>
  abstract findById(customerId: string): Promise<Customer | null>
  abstract count(): Promise<number>
}
