import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://localhost:8080',
  headers: {
    Accept: 'application/json',
    Content: 'application/json',
  },
});
