/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
export default function Navbar(props) {
  const style = {};
  if (props.mode === 'light') {
    style.backgroundColor = '#e1f6ff';
  }
  
  const navmodify=()=>{
    if (props.mode==='light')
      return ``;
    else
      return `bg-${props.mode} navbar-${props.mode}`;
  }
  // <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
  return (
    <nav 
      className={`navbar navbar-expand-lg ${navmodify()}`} style={style}
    >
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li>
            <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.aboutText}
              </a>
            </li>
            <li className="nav-item dropdown" style={{ display: "none" }}>
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="form-check form-switch">
                <input
                  className="form-check-input "
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                />
                <label
                  className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  Dark Mode
                </label>
        </div>
      </div>
      </div>
    </nav>
    )};

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
