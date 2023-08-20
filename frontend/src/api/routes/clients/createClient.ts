import ApiRoutes from '../../../constants/ApiRoutes';
import IClientsStatus from '../../../interfaces/IClientsStatus';
import { CreateClientDto } from '../../../utils/dtos/CreateClient.dto';
import handlesAxios from '../../handleAxios';

const createClient = async (client: CreateClientDto): Promise<IClientsStatus> => {
  const response = await handlesAxios.post(ApiRoutes.CLIENTS, client);

  return response.data;
};

export default createClient;
