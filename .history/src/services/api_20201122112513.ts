import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sandbox.houpa.app/api-tests/showcases',
});

export default api;
