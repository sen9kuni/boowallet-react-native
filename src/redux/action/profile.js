import {createAsyncThunk} from '@reduxjs/toolkit';
import qs from 'qs';
import https from '../../helpers/http';

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
      // console.log(send);
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
    // result.successMsg = data.message;
    return data;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const deleteImage = createAsyncThunk(
  'auth/delete-image',
  async param => {
    const result = {};
    try {
      const {data} = await https(param.token).patch(
        'authenticated/deletePicture',
      );
      return data;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      return result;
    }
  },
);

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

export const uploadImage = createAsyncThunk(
  'auth/upload-image',
  async param => {
    const result = {};
    const form = new FormData();
    form.append('picture', {
      uri: param.data.uri,
      name: param.data.fileName,
      type: param.data.type,
    });
    // console.log(form._parts[0]);
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
      // console.log('success');
      return data;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      return result;
    }
  },
);
