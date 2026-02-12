"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import Top10AnimeCardGrid from "./components/Top10AnimeCardGrid";
import { fetchTop10AnimeData } from "./store/slices/top10Anime";
import AnimeSearcher from "./components/AnimeSearcher";
import AnimeCard from "./components/AnimeCard";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [searchedAnime, setSearchedAnime] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTop10AnimeData());
  }, [dispatch]);

  const fetchAnime = async (query) => {
    const ROOT_URL = "https://api.jikan.moe/v4/anime";
    const response = await axios.get(ROOT_URL, {
      params: {
        q: query,
        limit: 1,
      },
    });
    const animeData = response.data.data[0];
    setSearchedAnime(animeData);
    console.log(animeData);
  };

  return (
    <>
      <Navbar />
      <div className="homePageBackground">
        <AnimeSearcher fetchAnime={fetchAnime} />
        <div className="searchedAnime">
          <AnimeCard searchedAnime={searchedAnime} />
        </div>
        <div>
          <Top10AnimeCardGrid />
        </div>
      </div>
    </>
  );
}
