import IStatus from '../../../../interfaces/IStatus';

export class UpdateClientDto {
  public name?: string;
  public cpf?: string;
  public email?: string;
  public phoneNumber?: string;
  public status?: IStatus;
}
