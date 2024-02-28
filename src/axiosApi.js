import axios from 'axios';
import { BASE_URL } from '@/constants/index.js';

const axiosApi = axios.create({
  baseURL: BASE_URL
});

export default axiosApi;