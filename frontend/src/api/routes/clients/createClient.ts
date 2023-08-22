import ApiRoutes from '../../../constants/ApiRoutes';
import IClientsStatus from '../../../interfaces/IClientsStatus';
import { ClientDto } from '../../../utils/dtos/Client.dto';
import handlesAxios from '../../handleAxios';

const createClient = async (client: ClientDto): Promise<IClientsStatus> => {
  const response = await handlesAxios.post(ApiRoutes.CLIENTS, client);

  return response.data;
};

export default createClient;
