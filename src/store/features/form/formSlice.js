import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginForm: {
    username: "",
    email: "",
    password: "mod7USIP-TUNOMBRE",
    module: "React Mod7",
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const { setInitialValue } = formSlice.actions;

export default formSlice.reducer;
