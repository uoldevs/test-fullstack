import IClientStatus from '../../../../interfaces/IClientStatus';
import IStatus from '../../../../interfaces/IStatus';

export class CreateClientDto implements IClientStatus {
  public name: string;
  public cpf: string;
  public email: string;
  public phoneNumber: string;
  public status: IStatus;
}
