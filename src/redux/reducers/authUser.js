import {createSlice} from '@reduxjs/toolkit';
import {
  changePassword,
  changePin,
  editPhone,
  getAllUsers,
  getProfile,
  login,
  nextUsers,
  searchUsers,
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
  dataUsers: [],
  nowPage: null,
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
    resetPage: state => {
      state.nowPage = null;
    },
    resetDataUsers: state => {
      state.dataUsers = [];
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

    build.addCase(getAllUsers.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(getAllUsers.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      state.dataUsers = action.payload.results;
      state.nowPage = action.payload.pageInfo.currentPage;
    });

    build.addCase(nextUsers.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(nextUsers.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      state.dataUsers = [...state.dataUsers, ...action.payload.results];
      state.nowPage = action.payload.pageInfo.currentPage;
    });

    build.addCase(searchUsers.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(searchUsers.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      state.dataUsers = action.payload.results;
      state.nowPage = action.payload.pageInfo.currentPage;
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

export const {
  logout,
  setCurrentPin,
  resetCurrentPin,
  resetPage,
  resetDataUsers,
} = authUser.actions;
export {
  login,
  getProfile,
  editPhone,
  changePassword,
  changePin,
  topUp,
  getAllUsers,
  nextUsers,
  searchUsers,
};
export default authUser.reducer;
