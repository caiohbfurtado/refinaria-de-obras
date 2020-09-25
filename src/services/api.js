import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.omdbapi.com/?apikey=f3bf5049&s=',
});

export default api;
