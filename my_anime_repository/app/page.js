"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTop10AnimeData } from "./store/slices/top10Anime";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTop10AnimeData());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div>
        <h1>My Anime Repository</h1>
      </div>
    </>
  );
}
