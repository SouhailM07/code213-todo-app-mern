import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./components/Input/inputSlice";

let store = configureStore({
  reducer: {
    toggleModes: inputSlice,
  },
});

export default store;
