import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [loggedin, setLoggedin] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#232a69" }}
      >
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper     */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Link */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  Sign Up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/plugin">
                  Plugin
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="dashboard/">
                  Dashboard
                </NavLink>
              </li>
              
            </ul>
            {/* Icons */}
            <ul className="navbar-nav d-flex flex-row me-1">
              <li className="nav-item me-3 me-lg-0">
                {loggedin ? (
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      setLoggedin(false);
                    }}
                  >
                    <i className="fas fa-sign-out-alt"></i>Logout
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setLoggedin(true);
                    }}
                  >
                    <i className="fas fa-sign-in"></i> Login
                  </button>
                )}
              </li>
            </ul>
            {/* Search */}
            <form className="w-auto">
              <input
                type="search"
                className="form-control"
                placeholder="Type query"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
