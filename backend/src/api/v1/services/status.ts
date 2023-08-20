import * as statusModel from '../models/status';

export async function listStatus() {
  return statusModel.listStatus();
}

export default { listStatus };
