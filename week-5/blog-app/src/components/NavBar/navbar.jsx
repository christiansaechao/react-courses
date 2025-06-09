import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Let Blog
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home 🏠
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/counter">
                  Counter
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/search">
                  Search 🔎
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/posts">
                  All Posts 📃
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  Create Post 📃
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
