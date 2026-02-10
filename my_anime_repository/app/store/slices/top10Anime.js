import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const top10AnimeSlice = createSlice({
  name: "top10Anime",
});
