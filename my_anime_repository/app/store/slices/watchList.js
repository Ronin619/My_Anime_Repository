import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

export const watchListSlice = createSlice({
  name: "watchList",
  initialState: {
    watchList: [],
  },
  reducers: {
    addToWatchList: (state, action) => {
      if (
        !state.watchList.some((anime) => anime.title === action.payload.title)
      ) {
        state.watchList.push(action.payload);
        console.log(state.watchList);
      }
    },
  },
});

export const { addToWatchList } = watchListSlice.actions;
export default watchListSlice.reducer;
