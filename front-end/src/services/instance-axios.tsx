import axios from 'axios';

export const instanceAxios = axios.create({
  baseURL: 'https://localhost:8080/users',
  headers: {
    'Content-Type': 'application/json',
  },
});
