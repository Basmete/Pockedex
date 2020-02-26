import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

export default class NavBar extends Component {

  render() {
    
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed">
        <Link to="/" className="navbar-brand">
          POCKEDEX
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/pokemons" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pokemons-caught" className="nav-link">
                Cathced Pokemons
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
