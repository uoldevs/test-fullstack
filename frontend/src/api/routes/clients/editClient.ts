import ApiRoutes from '../../../constants/ApiRoutes';
import IClientsStatus from '../../../interfaces/IClientsStatus';
import { ClientDto } from '../../../utils/dtos/Client.dto';
import handlesAxios from '../../handleAxios';

const updateClient = async (client: ClientDto, clientId: string): Promise<IClientsStatus> => {
  const response = await handlesAxios.patch(`${ApiRoutes.CLIENTS}?clientId=${clientId}`, client);

  return response.data;
};

export default updateClient;
