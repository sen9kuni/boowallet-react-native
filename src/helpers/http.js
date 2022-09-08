import axios from 'axios';
import {logout} from '../redux/reducers/authUser';
import {store} from '../redux/store';

// const url = 'http://192.168.59.150:3333/';
const url = 'https://boowallet-private-server.vercel.app/';
// const url = 'https://backendboowallet.herokuapp.com/';

const https = token => {
  const headers = {};
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  const inseptor = axios.create({
    headers,
    baseURL: url,
    // baseURL: 'http://localhost:3333/',
    // url: 'http://localhost:3333/',
    // baseURL: 'https://fazzpay.herokuapp.com/',
  });

  inseptor.interceptors.response.use(
    config => {
      // console.log(config);
      return config;
    },
    e => {
      if (e.response.status === 401) {
        store.dispatch(logout());
      }
      return Promise.reject(e);
    },
  );

  return inseptor;
};

export default https;
