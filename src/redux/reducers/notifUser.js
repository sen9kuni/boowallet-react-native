import {createSlice} from '@reduxjs/toolkit';
import {
  countNotif,
  getNotis,
  nextGetNotis,
  readNotif,
} from '../action/notification';

const initialState = {
  errorMsg: null,
  successMsg: null,
  dataNotif: [],
  nextPageNotif: null,
  countHomeNotif: null,
};

const notifiUser = createSlice({
  name: 'notifiUser',
  initialState,
  reducers: {
    resetNextPageNotif: state => {
      state.nextPageNotif = null;
    },
  },
  extraReducers: build => {
    build.addCase(getNotis.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(getNotis.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      state.errorMsg = action.payload.errorMsg;
      state.dataNotif = action.payload.results;
      if (
        action.payload.pageInfo !== null &&
        action.payload.pageInfo !== undefined
      ) {
        state.nextPageNotif = action.payload.pageInfo.nextPage;
      }
    });

    build.addCase(nextGetNotis.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(nextGetNotis.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      state.errorMsg = action.payload.errorMsg;
      if (
        action.payload.results !== null &&
        action.payload.results !== undefined
      ) {
        state.dataNotif.push(...action.payload.results);
      } else {
        null;
      }

      if (
        action.payload.pageInfo !== null &&
        action.payload.pageInfo !== undefined
      ) {
        state.nextPageNotif = action.payload.pageInfo.nextPage;
      } else {
        state.nextPageNotif = null;
      }
    });

    build.addCase(readNotif.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(readNotif.fulfilled, (state, action) => {
      state.successMsg = action.payload.successMsg;
      state.errorMsg = action.payload.errorMsg;
    });

    build.addCase(countNotif.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(countNotif.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      state.errorMsg = action.payload.errorMsg;
      if (
        action.payload.results !== null &&
        action.payload.results !== undefined
      ) {
        state.countHomeNotif = action.payload.results;
      } else {
        state.countHomeNotif = 0;
      }
    });
  },
});

export const {resetNextPageNotif} = notifiUser.actions;
export {getNotis, nextGetNotis, countNotif, readNotif};
export default notifiUser.reducer;
