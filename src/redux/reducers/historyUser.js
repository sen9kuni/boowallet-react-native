import {createSlice} from '@reduxjs/toolkit';
import {getHistory, getHistoryHome, nextGetHistory} from '../action/history';

const initialState = {
  errorMsg: null,
  successMsg: null,
  dataHistory: [],
  dataHistoryHome: [],
  nextPageHistory: null,
};

const historyUser = createSlice({
  name: 'profile-user',
  initialState,
  reducers: {
    resetNextPageHistory: state => {
      state.nextPageHistory = null;
    },
  },
  extraReducers: build => {
    build.addCase(getHistoryHome.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(getHistoryHome.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      state.dataHistoryHome = action.payload.results;
    });

    build.addCase(getHistory.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(getHistory.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      state.dataHistory = action.payload.results;
      if (
        action.payload.pageInfo !== null &&
        action.payload.pageInfo !== undefined
      ) {
        state.nextPageHistory = action.payload.pageInfo.nextPage;
      }
    });

    build.addCase(nextGetHistory.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(nextGetHistory.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      if (
        action.payload.results !== null &&
        action.payload.results !== undefined
      ) {
        state.dataHistory.push(...action.payload.results);
      } else {
        null;
      }
      if (
        action.payload.pageInfo !== null &&
        action.payload.pageInfo !== undefined
      ) {
        state.nextPageHistory = action.payload.pageInfo.nextPage;
      } else {
        state.nextPageHistory = null;
      }
    });
  },
});

export const {resetNextPageHistory} = historyUser.actions;
export {getHistory, getHistoryHome, nextGetHistory};
export default historyUser.reducer;
