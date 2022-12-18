import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  expanded: boolean;
}

const initialState: AppState = {
  expanded: false,
};

export const appSlice = createSlice({
  name: "apps",
  initialState,
  reducers: {
    expand: (state) => {
      state.expanded = true;
    },
    collapse: (state) => {
      state.expanded = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { expand, collapse } = appSlice.actions;

export default appSlice.reducer;
