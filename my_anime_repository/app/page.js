"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import Top10AnimeCardGrid from "./components/Top10AnimeCardGrid";
import { fetchTop10AnimeData } from "./store/slices/top10Anime";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTop10AnimeData());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="homePageBackground">
        <Top10AnimeCardGrid />
      </div>
    </>
  );
}
