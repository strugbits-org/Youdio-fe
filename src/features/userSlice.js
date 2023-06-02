import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
    },

    setUserAuth: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    setUser: (state, action) => {
      state.user = action.payload.user;
    },
  },

  // extraReducers: (builder) => {
    
  // },
});

export const { logout, setUser, setUserAuth, forgotpassword } =
  userSlice.actions;
export default userSlice.reducer;
