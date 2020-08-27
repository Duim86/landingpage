import axios from 'axios';

const api = axios.create({
  baseURL: 'http://snappacking.appspot.com/',
})

export default api;