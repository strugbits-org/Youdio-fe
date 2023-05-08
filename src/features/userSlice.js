import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "src/config/https";

export const login = createAsyncThunk(
  "login",
  async ({ data }, { dispatch }) => {
    dispatch(pendingResponse());
    try { 
      const res = await apiClient.post("login", data);
      if (res?.data) {
        dispatch(setUser(res.data));
        return res.data;
      }
    }
    catch (e) {
      dispatch(logout(e.message));
    }

  }
);

export const register = createAsyncThunk(
  "register",
  async ({ data }, { rejectWithValue, dispatch, getState }) => {
    const res = await apiClient.post("register", data);
    if (res?.data) {
      return res.data;
    }
    rejectWithValue("");
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
    pendingResponse: (state) => {
      state.errorMessage = "";
    },
    setUser: ({ user, token, isLoading, errorMessage }, action) => {
      user = action.payload.user;
      token = action.payload.token;
      // isLoading = false;
      errorMessage = "";
    },
    logout: ({ token, user, isLoading, errorMessage }, action) => {
      token = null;
      user = null;
      // isLoading = false;
      errorMessage = action.payload;
      console.log(errorMessage);
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(login.pending, (state) => void (state.isLoading = true));
    builder.addCase(
      login.fulfilled,
      (state, action) => void (state.isLoading = false)
    );
    builder.addCase(
      login.rejected,
      (state, action) => void (state.isLoading = false)
    );

    // Register
    builder.addCase(register.pending, () => pendingResponse());
    builder.addCase(register.fulfilled, (_, action) => setUser(action.payload));
    builder.addCase(register.rejected, (_, action) =>
      logout(action.error.message)
    );
  },
});

export const { pendingResponse, setUser, logout } = userSlice.actions;
export default userSlice.reducer;
