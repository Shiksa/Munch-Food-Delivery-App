import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  category: 'all',
  search: ""
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    categoryFilter: (state, action) => {
      state.category = action.payload;
    },
    searchFilter: (state, action) => {
      state.search = action.payload;
    }
  }
});

export const { categoryFilter, searchFilter } = filterSlice.actions;
export default filterSlice.reducer;