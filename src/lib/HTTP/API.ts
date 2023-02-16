import axios from 'axios';

export const BASE_URL = 'http://localhost:3000';

export const API = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});
