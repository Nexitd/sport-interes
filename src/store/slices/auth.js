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

export const login = createAsyncThunk("auth/login", async (data, { dispatch }) => {
  const fet = await Fetch.post("authentication_token", data);
  localStorage.setItem("access_token", fet.token);
  dispatch(checkAuthorization());
  return fet;
});

export const registration = createAsyncThunk(
  "auth/registration",
  async (data) => {
    const registration = await Fetch.post("api/user/registration", data);
    return registration;
  }
);

export const avatarUpload = createAsyncThunk(
  "auth/avatarUpload",
  async (data) => {
    const avatar = await Fetch.post("api/user/avatar", data, "form-data");
    return avatar;
  }
)

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    initialLoading: true,
    profile: {},
    pendingLogin: false,
    errorLogin: false,
    success: false,
  },
  reducers: {
    successOff: (state) => {
      state.success = false;
    },
    logoutReducer: (state) => {
      state.isAuth = false;
      state.profile = {};
    },
  },
  extraReducers: {
    [checkAuthorization.fulfilled]: (state, action) => {
      state.isAuth = true;
      state.initialLoading = false;
      state.profile = action.payload;
    },
    [checkAuthorization.rejected]: (state) => {
      state.isAuth = false;
      state.initialLoading = false;
      state.profile = {};
    },
    [registration.fulfilled]: (state) => {
      state.success = true;
    },
    [login.pending]: (state) => {
      state.errorLogin = false;
      state.success = false;
      state.pendingLogin = true;
    },
    [login.fulfilled]: (state) => {
      state.success = true;
      state.errorLogin = false;
      state.pendingLogin = false;
    },
    [login.rejected]: (state) => {
      state.success = false;
      state.errorLogin = true;
      state.pendingLogin = false;
    },
    [avatarUpload.fulfilled]: (state, action) => {
      state.profile = action.payload;
    }
  },
});

export const {
  logoutReducer,
  successOff
} = authSlice.actions;

export default authSlice.reducer;