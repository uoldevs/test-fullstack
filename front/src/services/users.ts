import apiHandler from '@/utils/apiHandler';

export const getUsers = async () => {
    try {
        const response = await apiHandler('GET', `user`);
        return response;
    } catch (e) {
        console.log(e);
    }
};
