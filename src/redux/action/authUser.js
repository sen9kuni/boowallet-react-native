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
