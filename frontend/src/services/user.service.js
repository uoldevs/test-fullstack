import axios from 'axios';

const BASE_API = process.env.REACT_APP_USER_API || "http://localhost:3001";

export const getUsers = async () => {
    try {
        const res = await axios.get(`${BASE_API}/user`)
        return res.data;
    } catch (error) {
        return error;
    }
}

export const postUser = async (body) => {
    try {
        const res = await axios.post(`${BASE_API}/user`, body);
        return res;
    } catch (error) {
        console.error(error);
    }
}

export const putUser = async (id, body) => {
    try {
        const res = await axios.put(`${BASE_API}/user/${id}`, body);
        return res;
    } catch (error) {
        console.error(error);
    }
}
