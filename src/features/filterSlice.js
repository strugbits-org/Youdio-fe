import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  styles: null,
  instructors: null,
  filters: {
    duration: {},
    instructors: [],
    styles: {
      fitness: [],
      mindfulness: [],
      skills: [],
      yoga: [],
      setYourIntention: [],
    },
    difficulty: [],
    intensity: [],
  },
  filterTags: [],
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
    },

    // Duration
    filterDuration: (state, action) => {
      const { startTime, endTime } = action.payload;
      state.filters.duration = { startTime, endTime };
    },
    removeDuration: (state) => {
      state.filters.duration = {};
    },

    // For Arrays Filter
    pushToFilters: (state, action) => {
      const { key, subKey, data } = action.payload;
      
      if (subKey) {
        state.filterTags.push({data, key, subKey});
        state.filters[key][subKey].push(data);
      }
      else {
        state.filterTags.push({data, key});
        state.filters[key].push(data);
      }
    },
    removeFromFilter: (state, action) => {
      const { key, subKey, data } = action.payload;

      state.filterTags = state.filterTags.filter((tag) => tag.data !== data && tag);
      if (subKey) {
        const old = state.filters[key][subKey];
        state.filters[key][subKey] = old.filter((val) => val !== data && val);
      }
      else {
        const old = state.filters[key];
        state.filters[key] = old.filter((val) => val !== data && val);
      }
    },
  },

  // extraReducers: (builder) => {

  // },
});

export const {
  setStyles,
  setInstructors,
  filterDuration,
  removeDuration,
  pushToFilters,
  removeFromFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
