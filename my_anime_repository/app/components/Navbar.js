import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar bg-primary navbar-expand-lg">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light" href="/post/watchList">
                My Watch List
              </Link>
            </li>
          </ul>
        </div>
        <h1 className="text-light">My Anime Repository</h1>
      </div>
    </nav>
  );
}
