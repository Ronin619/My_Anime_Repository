import { useState } from "react";

export default function AnimeSearcher({ fetchAnime }) {
  const [searchAnime, setSearchAnime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedAnime = searchAnime.trim();
    if (!trimmedAnime) {
      window.alert("Enter an anime name");
      return;
    }

    const validInput = /^[a-zA-Z0-9 ]+$/.test(trimmedAnime);
    if (!validInput) {
      window.alert("Search must contain letters or numbers only");
      return;
    }

    fetchAnime(trimmedAnime);
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
