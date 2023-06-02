import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  styles: null,
  instructors: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setStyles: (state, action) => {
      state.styles = action.payload;
    },
    setInstructors: (state, action) => {
        state.instructors = action.payload;
        console.log(state.instructors);
    },
  },

  // extraReducers: (builder) => {

  // },
});

export const { setStyles, setInstructors } = filterSlice.actions;
export default filterSlice.reducer;
