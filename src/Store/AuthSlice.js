import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: localStorage.getItem("accessToken") || undefined,
    user: localStorage.getItem("user") || undefined,
  },
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const getUser = (state) => state.auth.user;
export const getAccessToken = (state) => state.auth.accessToken;

export const { setAccessToken, setUser } = AuthSlice.actions;

export default AuthSlice.reducer;
