import { createSlice } from "@reduxjs/toolkit";

export const watchListSlice = createSlice({
  name: "watchList",
  initialState: {
    watchList: JSON.parse(localStorage.getItem("watchList")) || [],
  },
  reducers: {
    addToWatchList: (state, action) => {
      if (
        !state.watchList.some((anime) => anime.title === action.payload.title)
      ) {
        state.watchList.push(action.payload);
      }
    },
    deleteFromWatchList: (state, action) => {
      state.watchList = state.watchList.filter(
        (anime) => anime.img !== action.payload,
      );
    },
  },
});

export const { addToWatchList, deleteFromWatchList } = watchListSlice.actions;
export default watchListSlice.reducer;
