import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FormattedMessage } from "react-intl";
import { I18nSelect } from "../i18n-select/I18nSelect";
export const Navbar = ({ setLanguage }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <FormattedMessage id="smart" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div className="navbar-nav-links">
              <Link className="nav-link active" aria-current="page" to="/homes">
                <FormattedMessage id="spaces" />
              </Link>
            </div>
            <div className="navbar-nav-controls">
              <I18nSelect setLanguage={setLanguage}></I18nSelect>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
