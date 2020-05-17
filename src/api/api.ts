import Axios from 'axios';
import forms from './services/form';

const api = {
  forms,
};

export const client = Axios.create({
  baseURL: 'https://www.mocky.io/v2',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export default api;
