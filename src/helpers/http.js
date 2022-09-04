import axios from 'axios';

// const url = 'http://192.168.149.150:3333/';
const url = 'https://fw9-backend-boowallet.vercel.app/';
// const url = 'https://backendboowallet.herokuapp.com/';

export const https = token => {
  const headers = {};
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return axios.create({
    headers,
    baseURL: url,
    // baseURL: 'http://localhost:3333/',
    // url: 'http://localhost:3333/',
    // baseURL: 'https://fazzpay.herokuapp.com/',
  });
};

// const https = axios.create({
//   baseURL: 'http://localhost:3333/',
// });

// export https;
