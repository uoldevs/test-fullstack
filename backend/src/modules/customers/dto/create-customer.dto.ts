import { IsEmail, IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';
import { Status } from '../../../enum/customerStatus';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(11, 11)
  taxId: string;

  @IsNotEmpty()
  @IsString()
  @Length(11, 11)
  phone: string;

  @IsNotEmpty()
  @IsEnum(Status)
  status: Status;
}
