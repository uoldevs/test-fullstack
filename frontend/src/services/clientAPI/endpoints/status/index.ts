import { ApiError } from "../../types";
import { Status } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function listStatus(): Promise<Status[] | ApiError> {
  const response = await fetch(`${API_URL}/status`);
  return response.json() as Promise<Status[] | ApiError>;
}
