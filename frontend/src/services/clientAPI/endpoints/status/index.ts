import {
  ClientAPIResponse,
  handleAPIResponse,
  handleThrownError,
} from "../../utils/handleAPIResponse";
import { Status } from "./types";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/status`;

export async function listStatus(): Promise<ClientAPIResponse<Status[]>> {
  let status, data;
  try {
    const response = await fetch(API_URL);
    status = response.status;
    data = await response.json();
  } catch (error) {
    data = handleThrownError(error);
  }
  return handleAPIResponse(status, data);
}
