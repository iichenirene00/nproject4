import { createSlice } from "@reduxjs/toolkit";

export const fixSlice = createSlice({
  name: "fix",
  initialState: {
    isfixed: false,
  },

  reducers: {
    fixed: (state) => {
      state.isfixed = !state.isfixed;
    },
  },
});
export const { fixed } = fixSlice.actions;
export default fixSlice.reducer;
