import {createSlice} from '@reduxjs/toolkit';
import {login} from '../action/authUser';

const initialState = {
  errorMsg: null,
  successMsg: null,
  resultMsg: {},
  token: null,
  id: null,
  pin: null,
  result: {},
};

const authUser = createSlice({
  name: 'auth-user',
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
  },
  extraReducers: build => {
    build.addCase(login.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(login.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      state.result = action.payload.result;
      // state.id = action.payload.result.id;
      // state.pin = action.payload.result.pin;
      // state.token = action.payload.result.token;
    });
  },
});

export const {logout} = authUser.actions;
export {login};
export default authUser.reducer;
