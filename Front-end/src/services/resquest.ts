import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import dataRequestBody from '../interfaces/IClienteRequest';

class Api {
  private api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3001',
    });
  }
  public async getData(endpoint: string) {
    try {
      const { data } = await this.api.get(endpoint);
      return data;
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return err.response;
      }
      return err;
    }
  }

  public async putUpdate(
    endpoint: string,
    dataToUpdate: dataRequestBody
  ): Promise<AxiosResponse> {
    try {
      return await this.api.put(endpoint, dataToUpdate);
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return err.response as unknown as AxiosResponse;
      }
      return err as unknown as AxiosResponse;
    }
  }
}

export default new Api();
