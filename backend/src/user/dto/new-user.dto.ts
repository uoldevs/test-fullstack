import { IsEmail, IsString, IsEnum } from 'class-validator';
import { UserStatus } from '../../enum/userStatus.enum';

export class NewUserDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  cpf: string;

  @IsString()
  phoneNumber: string;

  @IsEnum(UserStatus)
  status: string;
}
