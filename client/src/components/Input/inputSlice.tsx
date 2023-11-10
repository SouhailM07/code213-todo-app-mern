import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  toggleMode: "--light",
};

let inputSlice = createSlice({
  name: "toggle mods",
  initialState,
  reducers: {
    switchMode: (state) => {
      if (state.toggleMode == "--light") {
        state.toggleMode = "--dark";
      } else if (state.toggleMode == "--dark") {
        state.toggleMode = "--light";
      }
    },
  },
});

export let { switchMode } = inputSlice.actions;
export default inputSlice.reducer;
