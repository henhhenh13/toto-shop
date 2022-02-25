import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: "http://localhost:3004/",
    headers: {
        'content-type': 'application/json',
    }
})