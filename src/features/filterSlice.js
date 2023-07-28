import { createSlice } from "@reduxjs/toolkit";
import { filterKeys } from "src/helpers/constant";

const initialState = {
  styles: null,
  instructors: null,
  categories: null,
  difficulties: [
    {
      id: 0,
      name: "BEGINNER",
    },
    {
      id: 1,
      name: "MODERATE",
    },
    {
      id: 2,
      name: "INTERMEDIATE",
    },
    {
      id: 3,
      name: "ADVANCED",
    },
  ],
  intensities: [
    {
      id: 0,
      name: "Level 1",
    },
    {
      id: 1,
      name: "Level 2",
    },
    {
      id: 2,
      name: "Level 3",
    },
    {
      id: 3,
      name: "Level 4",
    },
  ],
  
  resetFilters: {
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
    date: null,
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
    date: null,
  },
  filterTags: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setStyles: (state, action) => {
      state.styles = action.payload.categories;
    },
    setInstructors: (state, action) => {
      state.instructors = action.payload.instructors;
    },
    setCategories: (state, action) => {
      state.categories = action.payload.categories;
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

        state.filters.duration = {};
      } else if (key === filterKeys.date) {
        state.filterTags = state.filterTags.filter(
          tag => tag.key !== key && tag
        );

        state.filters.date = null;
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

    // Duration
    filterDate: (state, action) => {
      const { key, data } = action.payload;
      state.filters.date = data.format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")

      state.filterTags = state.filterTags.filter(
        (tag) => tag.key !== key && tag
      );
      const dateTag = {
        data:data.format("DD/MM/YYYY"),
        key,
      };
      state.filterTags.push(dateTag);
    },
    removeDate: (state) => {
      state.filters.date = null;
    },

    clearFilters: (state) => {
      state.filters = state.resetFilters;
      state.filterTags = [];
    },
  },

  // extraReducers: (builder) => {

  // },
});

export const {
  setStyles,
  setInstructors,
  setCategories,
  filterDuration,
  removeDuration,
  pushToFilters,
  removeFromFilter,
  filterDate,
  removeDate,
  clearFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
