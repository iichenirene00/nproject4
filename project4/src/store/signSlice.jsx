import { createSlice } from "@reduxjs/toolkit";

export const signSlice = createSlice({
  name: "sign",
  initialState: {
    user: "",
    email: "",
  },

  reducers: {
    submit: (state, action) => {
      state.user = action.payload[0];
      state.email = action.payload[1];
    },
  },
});
export const { submit } = signSlice.actions;
export default signSlice.reducer;
