import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { OPEN_AI_KEY } from '@env';

class Http {
 public post = async (
  url: string,
  body: any,
  header: AxiosRequestConfig,
 ): Promise<AxiosResponse> => {
  return await axios.post(url, body, header);
 };
 public get = async (
  url: string,
  header: AxiosRequestConfig,
 ): Promise<AxiosResponse> => {
  return await axios.get(url, header);
 };
 public header(): AxiosRequestConfig {
  return {
   headers: {
    'Content-Type': 'aplication/json',
    'Authorization': `Bearer ${OPEN_AI_KEY}`,
   },
  };
 }
}
export { Http };
