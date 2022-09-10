import {createAsyncThunk} from '@reduxjs/toolkit';
import qs from 'qs';
// import {https} from '../../helpers/http';
import https from '../../helpers/http';

export const login = createAsyncThunk('auth/login', async params => {
  let result = {};
  try {
    const send = qs.stringify(params);
    const {data} = await https().post('auth/login', send);
    return data;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const register = createAsyncThunk('auth/register', async request => {
  const result = {};
  try {
    const send = qs.stringify(request);
    // console.log(send);
    const {data} = await https().post('auth/registerNew', send);
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.results[0].msg;
    return result;
    // console.log(e.response.data.message);
    // console.log(e.response.data.results[0].msg);
  }
});

export const resetPassword = createAsyncThunk(
  'auth/reset-password',
  async request => {
    const result = {};
    try {
      const send = qs.stringify(request);
      const {data} = await https().post('auth/resetPassword', send);
      return data;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      return result;
    }
  },
);

export const createPin = createAsyncThunk('auth/createPin', async request => {
  const result = {};
  try {
    const send = qs.stringify(request);
    console.log(send);
    const {data} = await https().post('auth/createPin', send);
    return data;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const removeIdFromToken = createAsyncThunk(
  'auth/remove-userid-token',
  async request => {
    // console.log(request);
    const result = {};
    try {
      const send = qs.stringify(request);
      console.log(send);
      const {data} = await https().patch('auth/removeUserFromToken', send);
      return data;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      return result;
    }
  },
);

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

export const editProfileName = createAsyncThunk(
  'auth/edit-profile',
  async param => {
    const result = {};
    const dataProfile = {};
    const token = param.token;
    dataProfile.first_name = param.first_name;
    dataProfile.last_name = param.last_name;
    try {
      const send = qs.stringify(dataProfile);
      console.log(send);
      const {data} = await https(token).patch(
        'authenticated/profileName',
        send,
      );
      return data;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      return result;
    }
  },
);

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
    try {
      const {data} = await https(token).get(
        `authenticated/joinTransactionsJoin?limit=10&page=${page}`,
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
  try {
    const {data} = await https(token).get(
      `authenticated/joinTransactionsJoin?limit=10&page=${page}`,
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
    try {
      const {data} = await https(token).get(
        `authenticated/joinTransactionsJoin?limit=10&page=${page}`,
      );
      return data;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      return result;
    }
  },
);

export const uploadImage = createAsyncThunk(
  'auth/upload-image',
  async param => {
    // const result = {};
    const form = new FormData();
    form.append('picture', {
      uri: param.data.uri,
      name: param.data.fileName,
      type: param.data.type,
    });
    console.log(form._parts[0]);
    try {
      const {data} = await https(param.token).patch(
        'authenticated/profile',
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      console.log('success');
      return data;
    } catch (e) {
      // result.errorMsg = e.response.data.message;
      // return result;
      console.log('failed');
      console.log(e);
    }
  },
);
