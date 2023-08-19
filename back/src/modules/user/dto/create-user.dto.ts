import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
  IsDate,
} from 'class-validator';

export class CreateUserDto {
  @ApiPropertyOptional({
    description: 'ID do usuário',
  })
  @ApiProperty()
  @IsInt()
  id?: number;

  @ApiProperty({
    description: 'Nome do usuário',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Email do usuário',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Telefone do usuário',
  })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({
    description: 'CPF do usuário',
  })
  @IsNotEmpty()
  @IsString()
  cpf: string;

  @ApiProperty({
    description: 'Status do usuário',
    enum: ['Ativo', 'Desativado', 'Aguardando ativação', 'Inativo'],
  })
  @IsNotEmpty()
  @IsString()
  status: string;

  @ApiPropertyOptional({
    description: 'Data de criação do usuário',
  })
  @IsOptional()
  @IsDate()
  createdAt?: Date;

  @ApiPropertyOptional({
    description: 'Data de atualização do usuário',
  })
  @IsOptional()
  @IsDate()
  updatedAt?: Date;

  @ApiPropertyOptional({
    description: 'Data de quando usuario foi deletado',
  })
  @IsOptional()
  @IsDate()
  deletedAt?: Date;
}
