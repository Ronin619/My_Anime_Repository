import { useSelector } from "react-redux";

export default function Top10AnimeCardGrid() {
  const top10AnimeData = useSelector((state) => state.top10Anime.top10Anime);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-5 g-3">
        {top10AnimeData.map((anime) => (
          <div className="col" key={anime.id}>
            <div className="card">
              <img
                src={anime.image}
                className="card-img-top"
                alt={anime.title}
              />
              <div className="card-body">
                <h5 className="card-title">{anime.title}</h5>
                <p className="card-text">Ranking: {anime.rank}</p>
                <p className="card-text">Episodes: {anime.episodes}</p>
                <p className="card-text">Year: {anime.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
