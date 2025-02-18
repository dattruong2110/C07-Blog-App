// src/redux/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { C07_BLOG_WEB_API } from "../constants/appConstant";

export const login = createAsyncThunk(
  "/api/auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${C07_BLOG_WEB_API}/auth/login`,
        credentials
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "/api/auth/register",
  async (newUser, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${C07_BLOG_WEB_API}/auth/register`,
        newUser
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const storedUser = localStorage.getItem("user");
const storedStatus = localStorage.getItem("status");

const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  token: null,
  status: storedStatus ? storedStatus : "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    clearCredentials: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        localStorage.setItem("status", "loading");
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        localStorage.setItem("status", "succeeded");
        state.user = action.payload.data;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        localStorage.setItem("status", "failed");
        state.error = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.status = "loading";
        localStorage.setItem("status", "loading");
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "succeeded";
        localStorage.setItem("status", "succeeded");
        state.user = action.payload.data;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        localStorage.setItem("status", "failed");
        state.error = action.payload;
      });
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;
