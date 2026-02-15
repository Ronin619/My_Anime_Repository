"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Top10AnimeCardGrid from "./components/Top10AnimeCardGrid";
import { fetchTop10AnimeData } from "./store/slices/top10Anime";
import { addToWatchList } from "./store/slices/watchList";
import AnimeSearcher from "./components/AnimeSearcher";
import AnimeCard from "./components/AnimeCard";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [searchedAnime, setSearchedAnime] = useState(null);
  const watchList = useSelector((state) => state.watchList.watchList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTop10AnimeData());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);

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
  };

  const watchListHandler = (anime) => {
    const animeInfo = {
      img: anime.image || anime.images.jpg.image_url,
      title: anime.title,
    };

    if (!watchList.find((anime) => anime.title === animeInfo.title)) {
      dispatch(addToWatchList(animeInfo));
    }
  };

  return (
    <>
      <Navbar />
      <div className="homePageBackground">
        <AnimeSearcher fetchAnime={fetchAnime} />
        <div className="searchedAnime">
          <AnimeCard
            searchedAnime={searchedAnime}
            watchListHandler={watchListHandler}
          />
        </div>
        <div>
          <Top10AnimeCardGrid watchListHandler={watchListHandler} />
        </div>
      </div>
    </>
  );
}
