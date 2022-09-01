import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  page: 1,
};

export const CostomPage = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    costomPagesPlus: state => {
      state.page = state.page + 1;
    },
    costomPagesMinus: state => {
      state.page = state.page - 1;
    },
    costomPagesReset: state => {
      state.CurrentPin = null;
    },
  },
});

export const {costomPagesPlus, costomPagesMinus, costomPagesReset} =
  CostomPage.actions;

export default CostomPage.reducer;
