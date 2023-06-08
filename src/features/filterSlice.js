import { createSlice } from "@reduxjs/toolkit";
import { filterKeys } from "src/helpers/constant";

const initialState = {
  styles: null,
  instructors: null,
  resetFilters:{
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
      const {
        key,
        duration: { startTime, endTime },
      } = action.payload;
      state.filters.duration = { startTime, endTime };

      state.filterTags = state.filterTags.filter(
        (tag) => tag.key !== key && tag
      );
      const durationTag = {
        data: `${startTime} - ${endTime}`,
        key,
      };
      state.filterTags.push(durationTag);
    },
    removeDuration: (state) => {
      state.filters.duration = {};
    },

    // For Arrays Filter
    pushToFilters: (state, action) => {
      const { key, subKey, data } = action.payload;

      if (subKey) {
        state.filterTags.push({ data, key, subKey });
        state.filters[key][subKey].push(data);
      } else {
        state.filterTags.push({ data, key });
        state.filters[key].push(data);
      }
    },
    removeFromFilter: (state, action) => {
      const { key, subKey, data } = action.payload;

      if (key === filterKeys.duration) {
        state.filterTags = state.filterTags.filter(
          (tag) => tag.key !== key && tag
        );

        state.filters.duration = {}
      } else {
        state.filterTags = state.filterTags.filter(
          (tag) => tag.data !== data && tag
        );
        if (subKey) {
          const old = state.filters[key][subKey];
          state.filters[key][subKey] = old.filter((val) => val !== data && val);
        } else {
          const old = state.filters[key];
          state.filters[key] = old.filter((val) => val !== data && val);
        }
      }
    },

    clearFilters: (state) => {
      state.filters = state.resetFilters;
      state.filterTags = []
    }
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
  clearFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
