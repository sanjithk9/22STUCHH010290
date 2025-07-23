import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000', // Backend API
});

instance.interceptors.request.use((req) => {
  // Custom Logging Middleware (mock)
  console.log([Logger] ${req.method.toUpperCase()} ${req.url} @ ${new Date().toISOString()});
  return req;
});

export default instance;