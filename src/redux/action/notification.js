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

export const getNotis = createAsyncThunk(
  'notification/get-notifs',
  async param => {
    const result = {};
    const token = param.token;
    const page = param.page;
    const sort_by =
      param.sort_by === null
        ? 'DESC'
        : param.sort_by === undefined
        ? 'DESC'
        : param.sort_by
        ? param.sort_by
        : 'DESC';
    try {
      const {data} = await https(token).get(
        `authenticated/joinTNotificationJoin?limit=10&page=${page}&sort_by=${sort_by}`,
      );
      return data;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      return result;
    }
  },
);

export const nextGetNotis = createAsyncThunk(
  'notification/get-next-notifs',
  async param => {
    const result = {};
    const token = param.token;
    const page = param.page;
    const sort_by =
      param.sort_by === null
        ? 'DESC'
        : param.sort_by === undefined
        ? 'DESC'
        : param.sort_by
        ? param.sort_by
        : 'DESC';
    try {
      const {data} = await https(token).get(
        `authenticated/joinTNotificationJoin?limit=10&page=${page}&sort_by=${sort_by}`,
      );
      return data;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      return result;
    }
  },
);

export const countNotif = createAsyncThunk(
  'notification/count-notification',
  async param => {
    const result = {};
    try {
      const {data} = await https(param.token).get(
        'authenticated/countNotifications',
      );
      return data;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      return result;
    }
  },
);

export const readNotif = createAsyncThunk('notification/read', async param => {
  const result = {};
  console.log(param);
  const id = param.id;
  try {
    const {data} = await https(param.token).patch(
      `authenticated/readNotification/${id}`,
    );
    return data;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});
