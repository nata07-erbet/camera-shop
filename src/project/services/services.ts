import  axios  from 'axios';
import { BASE_URL, TIME_OUT } from '../const/const';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT
});


export { api };
