import axios, { AxiosInstance } from 'axios';

class Api {
  private api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3001',
    });
  }
  public async getData(endpoint: string) {
    const { data } = await this.api.get(endpoint);
    return data;
  }
}

export default new Api();
