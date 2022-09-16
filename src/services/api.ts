import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs',
  params: {
    api_key: 'INSERT_YOUR_API_KEY_HERE',
  },
});

export default api;
