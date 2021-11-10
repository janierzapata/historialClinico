import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse f-flex justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            
            <li>
              <Link className="nav-link" to="/">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pets">
                Pets
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
