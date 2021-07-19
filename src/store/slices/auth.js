import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";
import Fetch from "../../api/fetch";

export const checkAuthorization = createAsyncThunk(
  "auth/checkAuthorization",
  async () => {
    const profile = await Fetch.get("api/user/me");
    return profile;
  }
);

export const login = createAsyncThunk("auth/login", async (data) => {
  const login = await Fetch.post("authentication_token", data);
  localStorage.setItem("access_token", login.token);
  return login;
});

export const registration = createAsyncThunk(
  "auth/registration",
  async (data) => {
    const registration = await Fetch.post("api/user/registration", data);
    return registration;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    loading: false,
  },
  reducers: {
    logout: (state) => {
      state.isAuth = true;
    },
  },
  extraReducers: {
    [checkAuthorization.fulfilled]: (state, payload) => {
      state.isAuth = true;
    },
    [checkAuthorization.rejected]: (state, payload) => {
      state.isAuth = false;
    },
    [login.fulfilled]: (state, payload) => {
      state.isAuth = true;
    },
    [login.rejected]: (state, payload) => {
      state.isAuth = false;
    },
  },
});

export const {
  logout
} = authSlice.actions;

export default authSlice.reducer;