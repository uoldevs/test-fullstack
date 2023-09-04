const DEFAULT_ERROR_MESSAGE = "An unexpected error occurred";

export interface ClientAPIResponseError {
  error: string | object[];
}

export interface ClientAPISuccess<T> {
  data: T;
}

export interface ClientAPIError {
  error: {
    status: number | undefined;
    message: ClientAPIResponseError["error"];
  };
}

export type ClientAPIResponse<T> = ClientAPISuccess<T> | ClientAPIError;

function isClientAPIResponseError(
  data: unknown
): data is ClientAPIResponseError {
  if (
    typeof data === "object" &&
    data !== null &&
    "error" in data &&
    (typeof data.error === "string" || Array.isArray(data.error))
  ) {
    return true;
  }
  return false;
}

export function handleAPIResponse<T>(
  status: number | undefined,
  data: T | ClientAPIResponseError
): ClientAPIResponse<T> {
  if (status && status < 300) return { data } as { data: T };

  const message = isClientAPIResponseError(data)
    ? data.error
    : DEFAULT_ERROR_MESSAGE;

  return { error: { status, message } };
}

export function handleThrownError(error: unknown): ClientAPIResponseError {
  return error instanceof Error
    ? { error: error.message }
    : { error: DEFAULT_ERROR_MESSAGE };
}
