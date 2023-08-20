import ApiRoutes from '../../../constants/ApiRoutes';
import IClientsStatus from '../../../interfaces/IClientsStatus';
import handlesAxios from '../../handleAxios';

const getClientAndStatusById = async (clientId: string): Promise<IClientsStatus> => {
  const response = await handlesAxios.get(`${ApiRoutes.CLIENTS}?clientId=${clientId}`);

  return response.data;
};

export default getClientAndStatusById;
