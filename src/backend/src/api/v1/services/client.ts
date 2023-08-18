import { Client } from '@prisma/client';
import * as clientModel from '../models/client';
import clientSchema from '../schemas/client';
import paramsSchema from '../schemas/routeParameters';
import HttpError from '../errors/HttpError';
import errorCatalog from '../errors/HttpErrorCatalog';
import prismaAdaptError from '../errors/prismaAdaptError';

export async function createClient(client: Client) {
  // throw an error if the client object is invalid
  const clientParsed = clientSchema.safeParse(client);
  if (!clientParsed.success) throw clientParsed.error;

  return clientModel.createClient(clientParsed.data as Client);
}

export async function updateClient(id: string, client: Client) {
  const convertedId = Number(id);

  // throw an error if the id in the url is invalid
  const idParsed = paramsSchema.id.safeParse(convertedId);
  if (!idParsed.success) throw new HttpError(errorCatalog.InvalidId);

  // throw an error if the client object is invalid
  const clientParsed = clientSchema.safeParse(client);
  if (!clientParsed.success) throw clientParsed.error;
  
  // try to update the client if it exists if not throw an error
  const updatedClient = await clientModel
    .updateClient(convertedId, clientParsed.data as Client)
    .catch(prismaAdaptError);

  return updatedClient;
}

export async function listClients() {
  return clientModel.listClients();
}
