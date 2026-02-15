import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ pageTitle }) {
  const pathname = usePathname();
  const isWatchListPage = pathname === "/post/watchList";

  return (
    <nav className="navbar bg-primary navbar-expand-lg">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {isWatchListPage ? (
                <Link className="nav-link text-light fw-bold" href="/">
                  Home
                </Link>
              ) : (
                <Link
                  className="nav-link text-light fw-bold"
                  href="/post/watchList"
                >
                  My Watch List
                </Link>
              )}
            </li>
          </ul>
        </div>
        <h1 className="text-light">My Anime Repository</h1>
      </div>
    </nav>
  );
}
