import ApiRoutes from '../../../constants/ApiRoutes';
import IClientsStatus from '../../../interfaces/IClientsStatus';
import handlesAxios from '../../handleAxios';

const getAllClientsAndStatus = async (): Promise<IClientsStatus[]> => {
  const response = await handlesAxios.get(ApiRoutes.CLIENTS);

  return response.data;
};

export default getAllClientsAndStatus;
