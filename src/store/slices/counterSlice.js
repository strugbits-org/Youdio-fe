import { createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "src/config/https";

export const fetchAllTodos = createAsyncThunk("fetchAllAds", async (name, age, number) => {
  console.log({name, age, number});
  const res = await apiClient.get("todos");
  console.log(res);
  return res.data;
});

const initialState = {
  value: 0,
  name: "Hamza",
  todos: []
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
      builder.addCase(fetchAllTodos.fulfilled, (state, action) => {
        // console.log("Fulfilled", { state, payload: action.payload });
        state.todos = action.payload
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
