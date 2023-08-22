import { Status } from '../status/types'

export type Client = {
  id?: number,
  name: string,
  email: string,
  cpf: string,
  phoneNumber: string,
  statusId?: number,
  status?: Status,
}
