import TypeClientStatus from '../../interfaces/TypeClientStatus';

export class UpdateClientDto {
  public name: string;
  public cpf: string;
  public email: string;
  public phoneNumber: string;
  public status: { name: TypeClientStatus | string };

  constructor(name: string, cpf: string, email: string, phoneNumber: string, status: TypeClientStatus | string) {
    this.name = name;
    this.cpf = cpf;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.status = { name: status };
  }
}
