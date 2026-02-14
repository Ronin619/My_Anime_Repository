"use client";
import { useSelector } from "react-redux";

const WatchList = () => {
  const watchList = useSelector((state) => state.watchList.watchList);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default WatchList;
