import {
  ClientAPIResponse,
  handleAPIResponse,
  handleThrownError,
} from "../../utils/handleAPIResponse";
import {
  ClientCreationData,
  ClientWithStatus,
  ClientWithStatusId,
} from "./types";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/clients`;

const headers = {
  "Content-Type": "application/json",
};

export async function listClients(): Promise<
  ClientAPIResponse<ClientWithStatus[]>
> {
  let status, data;
  try {
    const response = await fetch(API_URL, { cache: "no-cache" });
    status = response.status;
    data = await response.json();
  } catch (error) {
    data = handleThrownError(error);
  }
  return handleAPIResponse(status, data);
}

export async function createClient(
  client: ClientCreationData
): Promise<ClientAPIResponse<ClientWithStatusId>> {
  let status, data;
  const init = {
    method: "POST",
    headers,
    body: JSON.stringify(client),
  };
  try {
    const response = await fetch(API_URL, init);
    status = response.status;
    data = await response.json();
  } catch (error: any) {
    data = handleThrownError(error);
  }
  return handleAPIResponse(status, data);
}

export async function updateClient(
  id: number,
  client: ClientCreationData
): Promise<ClientAPIResponse<ClientWithStatusId>> {
  let status, data;
  const init = {
    method: "PUT",
    headers,
    body: JSON.stringify(client),
  };
  try {
    const response = await fetch(`${API_URL}/${id}`, init);
    status = response.status;
    data = await response.json();
  } catch (error: any) {
    data = handleThrownError(error);
  }
  return handleAPIResponse(status, data);
}
