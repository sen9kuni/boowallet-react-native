import axios from 'axios';
import {logout} from '../redux/reducers/authUser';
import {store} from '../redux/store';

// const url = 'http://192.168.39.150:3333/';
// const url = 'https://boowallet-private-server-git-master-sen9kuni.vercel.app/';
const url = 'https://boowallet-private-server.vercel.app/';
// const url = 'https://boowallet-private-server.vercel.app/';
// const url = 'https://backendboowallet.herokuapp.com/';

const https = token => {
  const headers = {};
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  const inseptor = axios.create({
    headers,
    baseURL: url,
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
