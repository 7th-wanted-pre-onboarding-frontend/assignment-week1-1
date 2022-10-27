import axios from 'axios';

const client = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/'
});

client.interceptors.request.use((req) => {
  const accessToken = localStorage.getItem('token');
  if (accessToken && req.headers) {
    req.headers.authorization = `Bearer ${accessToken}`;
  }
  return req;
});

export default client;
