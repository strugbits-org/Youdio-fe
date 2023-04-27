import { createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "src/config/https";

const test = () => {
  return Promise((resolve, reject) => {
    resolve(setTimeout(() => true, 3000))
  })
}
export const init = createAsyncThunk(
  "init",
  async ({ indentifier, cbAction, successCb, errorCb, params }, {getState, rejectWithValue, dispatch}) => {
    dispatch(cbAction(params))
    const state = getState()
    console.log(state);
    return await test()
  }
);

const initialState = {
  isLoading: [],
};

const counterSlice = createSlice({
  name: "baseStore",
  initialState,
  reducers: {
    toggleLoader(indentifier) {
      const array = [initialState];
      if (array.includes(indentifier)) {
        const index = array.indexOf(indentifier);
        array.splice(index, 1);
      } else {
        array.push(indentifier);
      }

      this.isLoading = array;
    },
    loading(indentifier) {
      return this.isLoading.includes(indentifier);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(init.fulfilled, (state, action) => {
      console.log("Fulfilled", { state, action });
    });
  },
});

export default counterSlice.reducer;
