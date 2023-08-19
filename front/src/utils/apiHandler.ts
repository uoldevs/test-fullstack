import axios, { AxiosResponse, Method } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function apiHandler(method: string, query: string, data?: object) {
    try {
        const response: AxiosResponse = await axios({
            method: method as Method,
            url: `http://localhost:3001/${query}`,
            data,
        });
        return response;
    } catch (error: any) {
        throw new Error('Error on axios:' + error);
    }
}
