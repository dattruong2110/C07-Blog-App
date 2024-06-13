import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { C07_BLOG_WEB_API } from "../constants/appConstant";

export const fetchUsers = createAsyncThunk("/user", async () => {
  const response = await axios.get(`${C07_BLOG_WEB_API}/users`);
  return response.data;
});

export const fetchUserById = createAsyncThunk("/user/:id", async (userId) => {
  const response = await axios.get(`${C07_BLOG_WEB_API}/user/${userId}`);
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    selectedUser: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchUserById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedUser = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
