import { useState } from "react";

export default function AnimeSearcher({ fetchAnime }) {
  const [searchAnime, setSearchAnime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAnime(searchAnime);
    setSearchAnime("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row justify-content-center">
        <div className="col-sm-4 my-1">
          <input
            type="text"
            className="form-control"
            id="animeInput"
            value={searchAnime}
            placeholder="Enter Anime Name"
            onChange={(e) => setSearchAnime(e.target.value)}
          />
        </div>
        <div className="col-auto my-1">
          <button type="submit" className="btn btn-primary" id="searchBtn">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
