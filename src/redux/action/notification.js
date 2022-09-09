import {createAsyncThunk} from '@reduxjs/toolkit';
import qs from 'qs';
// import {https} from '../../helpers/http';
import https from '../../helpers/http';

export const saveToken = createAsyncThunk('notif/create', async param => {
  const result = {};
  try {
    const send = qs.stringify(param);
    const {data} = await https().post('auth/setTokenNotif', send);
    return data;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});
