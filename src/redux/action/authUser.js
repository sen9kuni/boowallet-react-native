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
    const {data} = await https(token).get('/authenticated/joinUserAndProfile');
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

export const changePassword = createAsyncThunk(
  'auth/change-password',
  async param => {
    const result = {};
    const dataPass = {};
    const token = param.token;
    dataPass.currentPassword = param.currentPassword;
    dataPass.newPassword = param.newPassword;
    try {
      const send = qs.stringify(dataPass);
      const {data} = await https(token).patch(
        'authenticated/changePassword',
        send,
      );
      result.successMsg = data.message;
      return result;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      return result;
    }
  },
);

export const changePin = createAsyncThunk('auth/change-pin', async param => {
  const result = {};
  const dataPin = {};
  const token = param.token;
  dataPin.currentPin = param.currentPin;
  dataPin.newPin = param.newPin;
  // console.log(dataPin);
  try {
    const send = qs.stringify(dataPin);
    const {data} = await https(token).patch('authenticated/changePin', send);
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const topUp = createAsyncThunk('auth/topup', async param => {
  const result = {};
  const dataTopup = {};
  const token = param.token;
  dataTopup.amount = parseInt(param.amount, 10);
  dataTopup.note = 'top up';
  dataTopup.time = new Date().toISOString();
  try {
    const send = qs.stringify(dataTopup);
    console.log(send);
    const {data} = await https(token).post('authenticated/topup', send);
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});
