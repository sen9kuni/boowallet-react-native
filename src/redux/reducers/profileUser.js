import {createSlice} from '@reduxjs/toolkit';

import {
  changePassword,
  changePin,
  deleteImage,
  editPhone,
  editProfileName,
  getProfile,
  uploadImage,
} from '../action/profile';

const initialState = {
  errorMsg: null,
  successMsg: null,
  dataprofile: [],
};

const profileUser = createSlice({
  name: 'profile-user',
  initialState,
  reducers: {
    setCurrentPin: (state, action) => {
      state.CurrentPin = action.payload;
    },
  },
  extraReducers: build => {
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
      state.successMsg = action.payload.message;
      state.errorMsg = action.payload.errorMsg;
      state.dataprofile.phonenumber = action.payload.results.phonenumber;
    });

    build.addCase(changePassword.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(changePassword.fulfilled, (state, action) => {
      state.successMsg = action.payload.successMsg;
      state.errorMsg = action.payload.errorMsg;
    });

    build.addCase(changePin.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(changePin.fulfilled, (state, action) => {
      state.successMsg = action.payload.successMsg;
      state.errorMsg = action.payload.errorMsg;
    });

    build.addCase(editProfileName.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(editProfileName.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      // state.dataprofile = action.payload.results;
      state.dataprofile.first_name = action.payload.results.first_name;
      state.dataprofile.last_name = action.payload.results.last_name;
      state.dataprofile.fullname = action.payload.results.fullname;
      state.dataprofile.phonenumber = action.payload.results.phonenumber;
      state.dataprofile.picture = action.payload.results.picture;
      state.dataprofile.balance = action.payload.results.balance;
    });
    build.addCase(editProfileName.rejected, (state, action) => {
      state.errorMsg = action.payload.errorMsg;
    });

    build.addCase(deleteImage.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(deleteImage.fulfilled, (state, action) => {
      state.successMsg = action.payload.message;
      state.errorMsg = action.payload.errorMsg;
      if (
        action.payload.results !== null &&
        action.payload.results !== undefined
      ) {
        state.dataprofile.picture = action.payload.results.picture;
      }
    });

    build.addCase(uploadImage.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(uploadImage.fulfilled, (state, action) => {
      if (
        action.payload.results !== null &&
        action.payload.results !== undefined
      ) {
        state.successMsg = action.payload.message;
        state.errorMsg = action.payload.errorMsg;
        state.dataprofile.picture = action.payload.results.picture;
      } else {
        state.errorMsg = 'upload image failed';
      }
    });
  },
});

export const {setCurrentPin} = profileUser.actions;
export {
  changePassword,
  changePin,
  editPhone,
  editProfileName,
  getProfile,
  uploadImage,
  deleteImage,
};
export default profileUser.reducer;
