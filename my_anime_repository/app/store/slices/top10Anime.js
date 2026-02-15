import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const ROOT_URL = "https://api.jikan.moe/v4";

export const fetchTop10AnimeData = createAsyncThunk(
  "get/fetchTop10Anime",
  async () => {
    const response = await axios.get(`${ROOT_URL}/top/anime?limit=10`);
    const top10AnimeData = response.data.data;
    const animeCards = [];

    top10AnimeData.forEach((anime) => {
      const animeInfo = {
        id: anime.mal_id,
        title: anime.title,
        image: anime.images.jpg.image_url,
        episodes: anime.episodes,
        year: anime.year,
        description: anime.background,
      };

      animeCards.push(animeInfo);
    });
    return animeCards;
  },
);

export const top10AnimeSlice = createSlice({
  name: "top10Anime",
  initialState: {
    top10Anime: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTop10AnimeData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTop10AnimeData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.top10Anime = action.payload;
      })
      .addCase(fetchTop10AnimeData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default top10AnimeSlice.reducer;
