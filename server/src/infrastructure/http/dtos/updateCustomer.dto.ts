import { CustomerStatus } from '@/application/entities/customer'
import { IsPhoneNumber, IsEmail, IsOptional } from 'class-validator'

export class UpdateCustomerDTO {
  @IsOptional()
  name: string

  @IsOptional()
  @IsEmail()
  email: string

  @IsOptional()
  document: string

  @IsOptional()
  @IsPhoneNumber()
  phone: string

  @IsOptional()
  status: CustomerStatus
}
