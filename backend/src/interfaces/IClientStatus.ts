import IClient from './IClient';
import IStatus from './IStatus';

interface IClientStatus extends IClient {
  status: IStatus;
}

export default IClientStatus;
