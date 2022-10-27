import axios from 'axios';
import LocalStorageService from './LocalStorage.service';

const client = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/'
});

client.interceptors.request.use((req) => {
  const { value: accessToken } = LocalStorageService.get('token') || {};

  if (accessToken && req.headers) {
    req.headers.authorization = `Bearer ${accessToken}`;
  }
  return req;
});

export default client;
