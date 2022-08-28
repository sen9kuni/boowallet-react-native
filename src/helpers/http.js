import axios from 'axios';

function http(token) {
  const headers = {};
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return axios.create({
    headers,
    baseURL: 'https://fazzpay.herokuapp.com/',
  });
}

export default http;
