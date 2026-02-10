"use client";
import Navbar from "./components/Navbar";
import Top10AnimeCardGrid from "./components/Top10AnimeCardGrid";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <Top10AnimeCardGrid />
      </div>
    </>
  );
}
