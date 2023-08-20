import apiHandler from '@/utils/apiHandler';
import { SetStateAction } from 'react';

export const getClients = async () => {
    try {
        const response = await apiHandler('GET', `user`);
        return response;
    } catch (e) {
        console.log(e);
    }
};
