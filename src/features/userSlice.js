import { createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "src/config/https";

export const login = createAsyncThunk(
  "login",
  async ({ data, successCb }, { getState, rejectWithValue }) => {
    // const state = getState()
    // state.counter.id = "Hamza"
    // console.log({ state });
    const res = await apiClient.post("login", data);
    console.log(res.data);
    if (res?.data) {
      // successCb();
      return res.data;
    }
    return rejectWithValue(false);
  }
);

export const register = createAsyncThunk(
  "register",
  async ({ data, successCb }, { getState }) => {
    // const state = getState()
    // state.counter.id = "Hamza"
    // console.log({ state });
    const res = await apiClient.post("register", data);
    console.log(res.data);
    if (res?.data) {
      // successCb();
      return res.data;
    }
    return false;
  }
);

const initialState = {
  token: null,
  user: null,
  id:""
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
    setId: (state) => {
      state.id = "Hamza"
    }

  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.token = action.payload.user;
    });
    builder.addCase(login.rejected, (state, action) => {
      logout()
      console.log("rejectyede", action);
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.token = action.payload.user;
    });
    builder.addCase(register.rejected, (state, action) => {
      logout()
      console.log("rejected register", action);
    });
  },
});

export const { logout, setId } = counterSlice.actions;
export default counterSlice.reducer;
