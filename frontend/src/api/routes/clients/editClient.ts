import ApiRoutes from '../../../constants/ApiRoutes';
import IClientsStatus from '../../../interfaces/IClientsStatus';
import { UpdateClientDto } from '../../../utils/dtos/UpdateClient.dto';
import handlesAxios from '../../handleAxios';

const updateClient = async (client: UpdateClientDto, clientId: string): Promise<IClientsStatus> => {
  const response = await handlesAxios.patch(`${ApiRoutes.CLIENTS}?clientId=${clientId}`, client);

  return response.data;
};

export default updateClient;
