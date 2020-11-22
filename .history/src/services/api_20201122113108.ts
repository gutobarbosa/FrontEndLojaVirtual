import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sandbox.houpa.app/',
});

export default api;
