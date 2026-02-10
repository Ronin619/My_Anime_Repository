"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTop10AnimeData } from "./store/slices/top10Anime";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTop10AnimeData());
  }, [dispatch]);

  return (
    <>
      <nav className="navbar bg-primary navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  My Watch List
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <h1>My Anime Repository</h1>
      </div>
    </>
  );
}
