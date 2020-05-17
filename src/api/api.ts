import Axios from 'axios';
import forms from './services/form';

const api = {
  forms,
};

export const client = Axios.create({
  baseURL: 'http://www.mocky.io/v2',
});

export default api;
