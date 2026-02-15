/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function AnimeCard({ searchedAnime, watchListHandler }) {
  if (!searchedAnime) return null;

  return (
    <div className="card mb-3 searched-Anime border border-3 border-white">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={searchedAnime.images.jpg.image_url}
            className="img-fluid rounded-start searched-img"
            alt={searchedAnime.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title mb-1">{searchedAnime.title}</h4>
            <p className="card-text mb-1">Rank: {searchedAnime.rank}</p>
            {searchedAnime.year && (
              <p className="card-text mb-1">Year: {searchedAnime.year}</p>
            )}
            <p className="card-text mb-1">Status: {searchedAnime.status}</p>
            <p className="card-text mb-4">
              Description:{" "}
              <em className="description-text">{searchedAnime.background}</em>
            </p>
            <button
              className="add-Btn mb-0 border-1"
              onClick={() => watchListHandler(searchedAnime)}
            >
              <i class="bi bi-plus-circle-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
