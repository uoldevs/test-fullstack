import { CustomerStatus } from '@/application/entities/customer'
import { IsNotEmpty, IsPhoneNumber, IsEmail } from 'class-validator'

export class CreateCustomerDTO {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  document: string

  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string

  @IsNotEmpty()
  status: CustomerStatus
}
