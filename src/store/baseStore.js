import { createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "src/config/https";

export const init = createAsyncThunk("fetchAllAds", async () => {
  const res = await apiClient.get("todos");
  console.log(res);
  return res.data;
});

const initialState = {
  isLoading: [],
};

const counterSlice = createSlice({
  name: "baseStore",
  initialState,
  reducers: {
    async initAction(indentifier, cbAction, successCb, errorCb, ...params) {},
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
    builder.addCase(fetchAllTodos.fulfilled, (state, action) => {
      console.log("Fulfilled", { state, action });
    });
  },
});

export default counterSlice.reducer;
