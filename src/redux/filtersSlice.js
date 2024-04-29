import { createSlice } from "@reduxjs/toolkit";

const initialState = { filters: { name: "" } };
const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState.filters,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
      console.log(state.name);
    },
  },
});
export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
