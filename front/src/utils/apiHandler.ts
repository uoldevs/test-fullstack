import axios, { AxiosResponse, Method } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function apiHandler(method: string, query: string, data?: object) {
    try {
        let url: string;

        const amplifyNodeEnv = await process.env.NEXT_PUBLIC_AMPLIFY_NODE_ENV;
        if (amplifyNodeEnv === 'local') {
            url = `http://localhost:3001/${query}`;
        } else {
            url = `https://kpvrxaf574.execute-api.us-east-1.amazonaws.com/dev/${query}`;
        }

        const response: AxiosResponse = await axios({
            method: method as Method,
            url,
            data,
        });
        return response;
    } catch (error: any) {
        throw new Error('Error on axios:' + error);
    }
}
