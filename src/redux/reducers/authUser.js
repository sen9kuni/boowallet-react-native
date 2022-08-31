import {createSlice} from '@reduxjs/toolkit';
import {
  changePassword,
  changePin,
  editPhone,
  getProfile,
  login,
  topUp,
} from '../action/authUser';

const initialState = {
  errorMsg: null,
  successMsg: null,
  resultMsg: {},
  token: null,
  email: null,
  id: null,
  pin: null,
  result: {},
  dataprofile: [],
  CurrentPin: null,
};

const authUser = createSlice({
  name: 'auth-user',
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    setCurrentPin: (state, action) => {
      state.CurrentPin = action.payload;
    },
    resetCurrentPin: state => {
      state.CurrentPin = null;
    },
  },
  extraReducers: build => {
    build.addCase(login.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(login.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      state.result = action.payload.results;
      state.id = action.payload.results.id;
      state.pin = action.payload.results.pin;
      state.token = action.payload.results.token;
      state.email = action.payload.results.email;
    });

    build.addCase(getProfile.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(getProfile.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      state.dataprofile = action.payload.results;
    });

    build.addCase(editPhone.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(editPhone.fulfilled, (state, action) => {
      state.successMsg = action.payload.successMsg;
    });

    build.addCase(changePassword.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(changePassword.fulfilled, (state, action) => {
      state.successMsg = action.payload.successMsg;
    });

    build.addCase(changePin.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(changePin.fulfilled, (state, action) => {
      state.successMsg = action.payload.successMsg;
    });

    build.addCase(topUp.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(topUp.fulfilled, (state, action) => {
      state.successMsg = action.payload.successMsg;
    });
  },
});

export const {logout, setCurrentPin, resetCurrentPin} = authUser.actions;
export {login, getProfile, editPhone, changePassword, changePin, topUp};
export default authUser.reducer;
