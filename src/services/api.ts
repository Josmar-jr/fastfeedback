import axios from 'axios';
import { parseCookies } from 'nookies';

const { 'fastFeedback.token': token } = parseCookies();

const api = axios.create({
  baseURL: '/api/',
});

if (token) {
  api.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export default api;
