import React from "react";

const navbar = () => {
  return (
    <React.Fragment>
      <nav
        className="navbar is-dark level is-marginless"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <h1 className="title has-text-warning level">ForTheFitness</h1>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">Home</a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link is-arrowless">Leagues</a>
                <div className="navbar-dropdown">
                  <a className="navbar-item">Global</a>
                  <a className="navbar-item">Local</a>
                </div>
              </div>
              <a className="navbar-item">Blog</a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link is-arrowless">Training</a>
                <div className="navbar-dropdown">
                  <a className="navbar-item">Cardio</a>
                  <a className="navbar-item">Edurance</a>
                  <a className="navbar-item">Power</a>
                  <a className="navbar-item">Power Edurance</a>
                </div>
              </div>
              <a className="navbar-item">About</a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-warning">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light">Log in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default navbar;
