import {createAsyncThunk} from '@reduxjs/toolkit';
import qs from 'qs';
import {https} from '../../helpers/http';

export const login = createAsyncThunk('auth/login', async params => {
  // console.log(params);
  let result = {};
  // const data = await https().post('auth/login', params);
  // console.log('data' + data);
  try {
    const send = qs.stringify(params);
    console.log(send);
    const {data} = await https().post('auth/login', send);
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
    result.errorMsg = e;
    return result;
  }
});

export const register = createAsyncThunk('auth/register', async request => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const {data} = await https().post('/auth/register', send);
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const createPin = createAsyncThunk('auth/createPin', async request => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const {data} = await https().post('auth/createPin', send);
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const getProfile = createAsyncThunk('auth/getProfile', async token => {
  const result = {};
  try {
    const {data} = await https(token).get('/authenticated/profile');
    return data;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const editPhone = createAsyncThunk('auth/editPhone', async param => {
  const result = {};
  const dataPhone = {};
  const token = param.token;
  dataPhone.phonenumber = param.phonenumber;
  // console.log(request);
  try {
    const send = qs.stringify(dataPhone);
    const {data} = await https(token).patch('authenticated/phone', send);
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});
