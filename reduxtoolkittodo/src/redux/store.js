import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter/index";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
