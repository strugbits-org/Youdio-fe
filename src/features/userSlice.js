import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "src/config/https";

export const login = createAsyncThunk(
  "login",
  async ({ data }) => {
    const res = await apiClient.post("login", data);
    if (res?.data) {
      return res.data;
    }
    return false;
  }
);

export const register = createAsyncThunk(
  "register",
  async ({ data }) => {
    const res = await apiClient.post("register", data);
    if (res?.data) {
      return res.data;
    }
    return false;
  }
);

const initialState = {
  token: null,
  user: null,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.token = action.payload.user;
    });
    builder.addCase(login.rejected, (state, action) => {
      logout();
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.token = action.payload.user;
    });
    builder.addCase(register.rejected, (state, action) => {
      logout();
    });
  },
});

export const { logout } = counterSlice.actions;
export default counterSlice.reducer;
