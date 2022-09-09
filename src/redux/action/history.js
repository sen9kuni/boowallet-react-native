import {createAsyncThunk} from '@reduxjs/toolkit';
import qs from 'qs';
// import {https} from '../../helpers/http';
import https from '../../helpers/http';

export const getHistoryHome = createAsyncThunk(
  'auth/get-history-home',
  async param => {
    const result = {};
    const token = param.token;
    const page =
      param.page === null
        ? 1
        : param.page === undefined
        ? 1
        : param.page
        ? param.page
        : 1;
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
        `authenticated/joinTransactionsJoin?limit=10&page=${page}&sort_by=${sort_by}`,
      );
      return data;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      return result;
    }
  },
);

export const getHistory = createAsyncThunk('auth/get-history', async param => {
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
      `authenticated/joinTransactionsJoin?limit=10&page=${page}&sort_by=${sort_by}`,
    );
    return data;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const nextGetHistory = createAsyncThunk(
  'auth/next-get-history',
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
        `authenticated/joinTransactionsJoin?limit=10&page=${page}&sort_by=${sort_by}`,
      );
      return data;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      return result;
    }
  },
);
