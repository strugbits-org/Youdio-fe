import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "src/config/https";

export const login = createAsyncThunk(
  "login",
  async ({ data }, {rejectWithValue}) => {
    try {
      console.log({login});
      const res = await apiClient.post("login", data);
      if (res?.data) {
        return res.data;
      }
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
);

export const register = createAsyncThunk(
  "register",
  async ({ data }, {rejectWithValue}) => {
    try {
      const res = await apiClient.post("register", data);
      if (res?.data) {
        return res.data;
      }
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
);

const initialState = {
  token: null,
  user: null,
  isLoading: true,
  errorMessage: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isLoading = false;
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    // Login
    // Pending
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    });
    // Fulfilled
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
      state.errorMessage = "";
    });
    // Rejected
    builder.addCase(login.rejected, (state, action) => {
      state.token = null;
      state.user = null;
      state.isLoading = false;
      state.errorMessage = action.payload;
    });

    // Register
    // Pending
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    });
    // Fulfilled
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
      state.errorMessage = "";
    });
    // Rejected
    builder.addCase(register.rejected, (state, action) => {
      // const { user, token, isLoading, errorMessage } = state;
      state.token = null;
      state.user = null;
      state.isLoading = false;
      state.errorMessage = action.payload;
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
