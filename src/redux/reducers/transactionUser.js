import {createSlice} from '@reduxjs/toolkit';
import {
  getAllUsers,
  getProfileById,
  nextUsers,
  searchUsers,
  topUp,
  transfer,
} from '../action/transaction';

const initialState = {
  errorMsg: null,
  successMsg: null,
  successMsgPin: null,
  dataUsers: [],
  nowPage: null,
  dataChoseprofile: {},
  dataTrans: {},
  searchKey: null,
};

const transactionUser = createSlice({
  name: 'transaction-user',
  initialState,
  reducers: {
    resetPage: state => {
      state.nowPage = null;
    },
    resetDataUsers: state => {
      state.dataUsers = [];
    },
    setDataTrans: (state, action) => {
      state.dataTrans = action.payload;
    },
    resetDataTrans: state => {
      state.dataTrans = {};
    },
    setSearchkey: (state, action) => {
      state.searchKey = action.payload;
    },
    resetSearchkey: state => {
      state.searchKey = null;
    },
  },
  extraReducers: build => {
    build.addCase(getProfileById.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(getProfileById.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      state.dataChoseprofile = action.payload.results[0];
    });

    build.addCase(getAllUsers.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(getAllUsers.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      state.errorMsg = action.payload.errorMsg;
      if (
        action.payload.pageInfo !== null &&
        action.payload.pageInfo !== undefined
      ) {
        state.dataUsers = action.payload.results;
        state.nowPage = action.payload.pageInfo.currentPage;
      } else {
        state.dataUsers = [];
      }
    });

    build.addCase(nextUsers.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(nextUsers.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      if (
        action.payload.results !== null &&
        action.payload.results !== undefined
      ) {
        state.dataUsers.push(...action.payload.results);
      } else {
        null;
      }
      if (
        action.payload.pageInfo !== null &&
        action.payload.pageInfo !== undefined
      ) {
        state.nowPage = action.payload.pageInfo.currentPage;
      }
    });

    build.addCase(searchUsers.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(searchUsers.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      state.errorMsg = action.payload.errorMsg;
      if (
        action.payload.pageInfo !== null &&
        action.payload.pageInfo !== undefined
      ) {
        state.dataUsers = action.payload.results;
        state.nowPage = action.payload.pageInfo.currentPage;
      }
    });

    build.addCase(topUp.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(topUp.fulfilled, (state, action) => {
      state.successMsg = action.payload.successMsg;
    });

    build.addCase(transfer.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(transfer.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
    });
  },
});

export const {
  resetDataTrans,
  resetDataUsers,
  resetPage,
  resetSearchkey,
  setDataTrans,
  setSearchkey,
} = transactionUser.actions;
export {getProfileById, getAllUsers, nextUsers, topUp, transfer};
export default transactionUser.reducer;
