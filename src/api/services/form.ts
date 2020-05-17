import { client } from '../api';
import { AxiosResponse } from 'axios';

interface DataType {
  key: string;
  value: string | boolean;
}

type Data = { [key: string]: DataType };

const postForm = async (formData: Data): Promise<AxiosResponse> => {
  const response = await client.post('/5d00cfff3200007d00f9d809', formData);

  return response;
};

export default {
  postForm,
};
