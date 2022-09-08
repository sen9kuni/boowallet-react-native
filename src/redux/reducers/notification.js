import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  fcm_token: null,
};

const notification = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.fcm_token = action.payload;
    },
  },
});

export const {setToken} = notification.actions;

export default notification.reducer;
