import {createAsyncThunk} from '@reduxjs/toolkit';
import qs from 'qs';
// import {https} from '../../helpers/http';
import https from '../../helpers/http';

export const topUp = createAsyncThunk('auth/topup', async param => {
  const result = {};
  const dataTopup = {};
  const token = param.token;
  dataTopup.amount = parseInt(param.amount, 10);
  dataTopup.note = 'top up';
  dataTopup.time = new Date().toISOString();
  try {
    const send = qs.stringify(dataTopup);
    // console.log(send);
    const {data} = await https(token).post('authenticated/topup', send);
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const getAllUsers = createAsyncThunk('auth/getAllUsers', async param => {
  const result = {};
  const token = param.token;
  const page = param.page;
  const search =
    param.search === null
      ? ''
      : param.search === undefined
      ? ''
      : param.search
      ? param.search
      : '';
  try {
    const {data} = await https(token).get(
      `authenticated/getAllUsersMk?search=${search}&limit=10&page=${page}`,
    );
    // console.log(data);
    return data;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const nextUsers = createAsyncThunk('auth/nextUsers', async param => {
  const result = {};
  const token = param.token;
  const page = param.page;
  const search =
    param.search === null
      ? ''
      : param.search === undefined
      ? ''
      : param.search
      ? param.search
      : '';
  try {
    const {data} = await https(token).get(
      `authenticated/getAllUsersMk?search=${search}&limit=10&page=${page}`,
    );
    return data;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const searchUsers = createAsyncThunk('auth/searchUsers', async param => {
  const result = {};
  const token = param.token;
  const page = param.page;
  const search =
    param.search === null
      ? ''
      : param.search === undefined
      ? ''
      : param.search
      ? param.search
      : '';
  try {
    const {data} = await https(token).get(
      `authenticated/getAllUsersMk?search=${search}&limit=10&page=${page}`,
    );
    return data;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    console.log(result.errorMsg);
    return result;
  }
});

export const getProfileById = createAsyncThunk(
  'auth/getProfileById',
  async param => {
    const result = {};
    const token = param.token;
    const user_id = param.user_id;
    // console.log(token);
    // console.log(user_id);
    try {
      const {data} = await https(token).get(
        `authenticated/getUserById/${user_id}`,
      );
      return data;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      return result;
    }
  },
);

export const transfer = createAsyncThunk('auth/transfer', async param => {
  const result = {};
  const dataTrans = {};
  const token = param.token;
  dataTrans.amount = parseInt(param.amount, 10);
  dataTrans.recipient_id = parseInt(param.recipient_id, 10);
  dataTrans.pin = param.pin;
  dataTrans.note = param.note;
  dataTrans.time = param.time;
  // new Date().toISOString();
  dataTrans.type_id_trans = 1;
  try {
    const send = qs.stringify(dataTrans);
    const {data} = await https(token).post('authenticated/transfer', send);
    return data;
  } catch (e) {
    result.message = e.response.data.message;
    return result;
  }
});
