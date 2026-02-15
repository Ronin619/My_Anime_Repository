/* eslint-disable @next/next/no-img-element */
"use client";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { deleteFromWatchList } from "../../store/slices/watchList";

const WatchList = () => {
  const watchList = useSelector((state) => state.watchList.watchList);
  const dispatch = useDispatch();

  return (
    <>
      <div className="watchList-container">
        <Navbar />
        <h1 className="watchList-title">Watch List</h1>
        <div>
          <table className="table table-bordered">
            <tbody className="table-group-divider">
              {watchList.map((anime, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img src={anime.img} alt={anime.title} width="50" />
                  </td>
                  <td className="anime-title">{anime.title}</td>
                  <td>
                    <button
                      className="btn btn-danger border-0"
                      onClick={() => dispatch(deleteFromWatchList(anime.img))}
                    >
                      <i className="bi bi-trash3-fill"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default WatchList;
