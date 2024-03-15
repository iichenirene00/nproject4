import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
axios
      .get("http://127.0.0.1:8000/api/v1/row1")
      .then((data) => {
        setD(data);
      })
      .catch((error) => {
        console.log(error);
      });
export const axiosSlice = createSlice({
  name: "axios",
  initialState: {
    axios: false,
  },

  reducers: {
    fixed: (state) => {
      state. = !state.isfixed;
    },
  },
});
export const { fixed } = fixSlice.actions;
export default fixSlice.reducer;
