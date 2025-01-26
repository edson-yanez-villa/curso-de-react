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
  reducers: {
    setValue: (state, action) => {
      state.loginForm[action.payload.name] = action.payload.value;
    },
    clearFormHook: (state) => {
      state.loginForm.username = "";
      state.loginForm.email = "";
      state.loginForm.password = "";
      state.loginForm.module = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setValue, clearFormHook } = formSlice.actions;

export default formSlice.reducer;
