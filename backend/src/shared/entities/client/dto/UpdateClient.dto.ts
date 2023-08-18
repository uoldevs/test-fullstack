import IStatus from '../../../../interfaces/IStatus';

export class UpdateClientDto {
  public name?: string;
  public cpf?: string;
  public email?: string;
  public phoneNumber?: string;
  public status?: IStatus;

  constructor(data: Partial<UpdateClientDto>);
  constructor(
    name?: string,
    cpf?: string,
    email?: string,
    phoneNumber?: string,
    status?: IStatus,
  );

  constructor(...args: any[]) {
    if (args.length === 1 && typeof args[0] === 'object') {
      Object.assign(this, args[0]);
    } else if (args.length === 5) {
      this.name = args[0];
      this.cpf = args[1];
      this.email = args[2];
      this.phoneNumber = args[3];
      this.status = args[4];
    } else {
      throw new Error('Invalid constructor arguments');
    }
  }
}
