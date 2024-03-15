import fix from "./fixSlice";
import sign from "./signSlice";
import { configureStore } from "@reduxjs/toolkit";
export default configureStore({
  reducer: {
    fix: fix,
    sign: sign,
  },
});
