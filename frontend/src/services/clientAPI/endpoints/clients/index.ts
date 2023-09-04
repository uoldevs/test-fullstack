import { ApiError } from "../../types";
import {
  ClientCreationData,
  ClientWithStatus,
  ClientWithStatusId,
} from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const headers = {
  "Content-Type": "application/json",
};

export async function listClients(): Promise<ClientWithStatus[] | ApiError> {
  const response = await fetch(`${API_URL}/clients`, { cache: "no-cache" });
  return response.json();
}

export async function createClient(
  client: ClientCreationData
): Promise<ClientWithStatusId | ApiError> {
  const response = await fetch(`${API_URL}/clients`, {
    method: "POST",
    headers,
    body: JSON.stringify(client),
  });
  return response.json();
}

export async function updateClient(
  id: number,
  client: ClientCreationData
): Promise<ClientWithStatusId | ApiError> {
  const response = await fetch(`${API_URL}/clients/${id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(client),
  });
  return response.json();
}
