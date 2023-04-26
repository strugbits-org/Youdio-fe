import { createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "src/config/https";

export const login = createAsyncThunk("login", async ({ data, successCb }) => {
  const res = await apiClient.post("login", data);
  if (res?.data) {
    successCb()
    return res.data;
  }
  return false;
});

const initialState = {
  token: null,
  user: null
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null
      state.user = null
    }
  },
  extraReducers: (builder) => {
      builder.addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.token = action.payload.user;
      });
  },
});

export const { logout } = counterSlice.actions;
export default counterSlice.reducer;
