import axios from 'axios';

const HOST = process.env.REACT_APP_BACKEND_HOST || 'http://127.0.0.1';
const PORT = process.env.REACT_APP_BACKEND_PORT || '3000';

const api = axios.create({
    baseURL: `${HOST}:${PORT}/` || 'http://127.0.0.1:3333/',
});

export default api;