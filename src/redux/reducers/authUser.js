import {createSlice} from '@reduxjs/toolkit';
import {
  // changePassword,
  // changePin,
  createPin,
  // editPhone,
  // editProfileName,
  // getAllUsers,
  // getHistory,
  // getHistoryHome,
  // getProfile,
  // getProfileById,
  login,
  // nextGetHistory,
  // nextUsers,
  register,
  resetPassword,
  // searchUsers,
  // topUp,
  // transfer,
  // uploadImage,
} from '../action/authUser';

const initialState = {
  errorMsg: null,
  successMsg: null,
  successMsgPin: null,
  resultMsg: {},
  token: null,
  email: null,
  id: null,
  pin: null,
  result: {},
  tempEmail: null,
  // dataprofile: [],
  // CurrentPin: null,
  // dataUsers: [],
  // nowPage: null,
  // dataChoseprofile: {},
  // dataTrans: {},
  // searchKey: null,
  // dataHistory: [],
  // dataHistoryHome: [],
  // nextPageHistory: null,
};

const authUser = createSlice({
  name: 'auth-user',
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    setTempEmail: (state, action) => {
      state.tempEmail = action.payload;
    },
    resetTempEmail: state => {
      state.tempEmail = null;
    },
  },
  extraReducers: build => {
    build.addCase(login.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(login.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      state.errorMsg = action.payload.errorMsg;
      if (
        action.payload.results !== null &&
        action.payload.results !== undefined
      ) {
        state.result = action.payload.results;
        state.id = action.payload.results.id;
        state.pin = action.payload.results.pin;
        state.token = action.payload.results.token;
        state.email = action.payload.results.email;
      }
    });

    build.addCase(register.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(register.fulfilled, (state, action) => {
      state.successMsg = action.payload.successMsg;
      state.errorMsg = action.payload.errorMsg;
    });

    build.addCase(resetPassword.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(resetPassword.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      state.errorMsg = action.payload.errorMsg;
    });

    build.addCase(createPin.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(createPin.fulfilled, (state, action) => {
      if (
        action.payload.results !== null &&
        action.payload.results !== undefined
      ) {
        state.pin = action.payload.results.pin;
      }
      // state.successMsg = action.payload.message;
      state.successMsgPin = action.payload.message;
      state.errorMsg = action.payload.errorMsg;
    });

    // build.addCase(getProfile.pending, state => {
    //   state.errorMsg = null;
    //   state.successMsg = null;
    // });
    // build.addCase(getProfile.fulfilled, (state, action) => {
    //   state.successMsg = action.payload.message;
    //   state.dataprofile = action.payload.results;
    // });

    // build.addCase(editProfileName.pending, state => {
    //   state.errorMsg = null;
    //   state.successMsg = null;
    // });
    // build.addCase(editProfileName.fulfilled, (state, action) => {
    //   state.successMsg = action.payload.message;
    //   // state.dataprofile = action.payload.results;
    //   state.dataprofile.first_name = action.payload.results.first_name;
    //   state.dataprofile.last_name = action.payload.results.last_name;
    //   state.dataprofile.fullname = action.payload.results.fullname;
    //   state.dataprofile.phonenumber = action.payload.results.phonenumber;
    //   state.dataprofile.picture = action.payload.results.picture;
    //   state.dataprofile.balance = action.payload.results.balance;
    // });
    // build.addCase(editProfileName.rejected, (state, action) => {
    //   state.errorMsg = action.payload.errorMsg;
    // });

    // build.addCase(getProfileById.pending, state => {
    //   state.errorMsg = null;
    //   state.successMsg = null;
    // });
    // build.addCase(getProfileById.fulfilled, (state, action) => {
    //   state.successMsg = action.payload.message;
    //   state.dataChoseprofile = action.payload.results[0];
    // });

    // build.addCase(getHistoryHome.pending, state => {
    //   state.errorMsg = null;
    //   state.successMsg = null;
    // });
    // build.addCase(getHistoryHome.fulfilled, (state, action) => {
    //   state.successMsg = action.payload.message;
    //   state.dataHistoryHome = action.payload.results;
    // });

    // build.addCase(getHistory.pending, state => {
    //   state.errorMsg = null;
    //   state.successMsg = null;
    // });
    // build.addCase(getHistory.fulfilled, (state, action) => {
    //   state.successMsg = action.payload.message;
    //   state.dataHistory = action.payload.results;
    //   if (
    //     action.payload.pageInfo !== null &&
    //     action.payload.pageInfo !== undefined
    //   ) {
    //     state.nextPageHistory = action.payload.pageInfo.nextPage;
    //   }
    // });

    // build.addCase(nextGetHistory.pending, state => {
    //   state.errorMsg = null;
    //   state.successMsg = null;
    // });
    // build.addCase(nextGetHistory.fulfilled, (state, action) => {
    //   state.successMsg = action.payload.message;
    //   if (
    //     action.payload.results !== null &&
    //     action.payload.results !== undefined
    //   ) {
    //     state.dataHistory.push(...action.payload.results);
    //   } else {
    //     null;
    //   }
    //   if (
    //     action.payload.pageInfo !== null &&
    //     action.payload.pageInfo !== undefined
    //   ) {
    //     state.nextPageHistory = action.payload.pageInfo.nextPage;
    //   } else {
    //     state.nextPageHistory = null;
    //   }
    // });

    // build.addCase(getAllUsers.pending, state => {
    //   state.errorMsg = null;
    //   state.successMsg = null;
    // });
    // build.addCase(getAllUsers.fulfilled, (state, action) => {
    //   state.successMsg = action.payload.message;
    //   state.dataUsers = action.payload.results;
    //   state.nowPage = action.payload.pageInfo.currentPage;
    // });

    // build.addCase(nextUsers.pending, state => {
    //   state.errorMsg = null;
    //   state.successMsg = null;
    // });
    // build.addCase(nextUsers.fulfilled, (state, action) => {
    //   state.successMsg = action.payload.message;
    //   if (
    //     action.payload.results !== null &&
    //     action.payload.results !== undefined
    //   ) {
    //     state.dataUsers.push(...action.payload.results);
    //   } else {
    //     null;
    //   }
    //   if (
    //     action.payload.pageInfo !== null &&
    //     action.payload.pageInfo !== undefined
    //   ) {
    //     state.nowPage = action.payload.pageInfo.currentPage;
    //   }
    // });

    // build.addCase(searchUsers.pending, state => {
    //   state.errorMsg = null;
    //   state.successMsg = null;
    // });
    // build.addCase(searchUsers.fulfilled, (state, action) => {
    //   state.successMsg = action.payload.message;
    //   state.dataUsers = action.payload.results;
    //   state.nowPage = action.payload.pageInfo.currentPage;
    // });

    // build.addCase(editPhone.pending, state => {
    //   state.errorMsg = null;
    //   state.successMsg = null;
    // });
    // build.addCase(editPhone.fulfilled, (state, action) => {
    //   state.successMsg = action.payload.successMsg;
    // });

    // build.addCase(changePassword.pending, state => {
    //   state.errorMsg = null;
    //   state.successMsg = null;
    // });
    // build.addCase(changePassword.fulfilled, (state, action) => {
    //   state.successMsg = action.payload.successMsg;
    // });

    // build.addCase(changePin.pending, state => {
    //   state.errorMsg = null;
    //   state.successMsg = null;
    // });
    // build.addCase(changePin.fulfilled, (state, action) => {
    //   state.successMsg = action.payload.successMsg;
    // });

    // build.addCase(topUp.pending, state => {
    //   state.errorMsg = null;
    //   state.successMsg = null;
    // });
    // build.addCase(topUp.fulfilled, (state, action) => {
    //   state.successMsg = action.payload.successMsg;
    // });

    // build.addCase(transfer.pending, state => {
    //   state.errorMsg = null;
    //   state.successMsg = null;
    // });
    // build.addCase(transfer.fulfilled, (state, action) => {
    //   state.successMsg = action.payload.message;
    // });

    // build.addCase(uploadImage.pending, state => {
    //   state.errorMsg = null;
    //   state.successMsg = null;
    // });
    // build.addCase(uploadImage.fulfilled, (state, action) => {
    //   state.successMsg = action.payload.message;
    //   if (
    //     action.payload.results !== null &&
    //     action.payload.results !== undefined
    //   ) {
    //     state.dataprofile.picture = action.payload.results.picture;
    //   }
    // });
  },
});

export const {
  logout,
  setTempEmail,
  resetTempEmail,
  // setCurrentPin,
  // resetCurrentPin,
  // resetPage,
  // resetDataUsers,
  // setDataTrans,
  // resetDataTrans,
  // setSearchkey,
  // resetSearchkey,
  // resetNextPageHistory,
} = authUser.actions;
export {
  login,
  register,
  createPin,
  resetPassword,
  // getProfile,
  // editPhone,
  // changePassword,
  // changePin,
  // topUp,
  // getAllUsers,
  // nextUsers,
  // searchUsers,
  // getProfileById,
  // getHistoryHome,
  // getHistory,
  // nextGetHistory,
  // transfer,
  // editProfileName,
};
export default authUser.reducer;
