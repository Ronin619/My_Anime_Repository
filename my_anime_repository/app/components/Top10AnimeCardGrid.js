/* eslint-disable @next/next/no-img-element */
import { useSelector } from "react-redux";

export default function Top10AnimeCardGrid({ watchListHandler }) {
  const top10AnimeData = useSelector((state) => state.top10Anime.top10Anime);

  return (
    <>
      <div className="top10Grid">
        <h1 className="top10Title">Top 10 Anime</h1>
        <div className="row row-cols-1 row-cols-md-5 g-3">
          {top10AnimeData.map((anime) => (
            <div className="col" key={anime.id}>
              <div className="card">
                <img
                  src={anime.image}
                  className="card-img-top"
                  alt={anime.title}
                />
                <div className="card-body mb-0">
                  <h5 className="card-title mb-0">{anime.title}</h5>
                  <p className="card-text mb-0">Episodes: {anime.episodes}</p>
                  <p className="card-text mb-0">
                    {anime.year ? `Year: ${anime.year}` : null}
                  </p>
                  <button
                    className="add-Btn mb-0"
                    onClick={() => {
                      watchListHandler(anime);
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
