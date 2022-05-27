import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomesList } from "./pages/homes-list/HomesList";
import { LOCALES } from "../i18n/locales";
import { Navbar } from "./nav/Navbar";
import RoomsList from "./pages/RoomsList";
import { IntlProvider } from "react-intl";
import messages from "../i18n/messages";

const Main = () => {
  const userLang = navigator.language || navigator.userLanguage;
  const [spacesList, setSpacesList] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("spaces") === null) {
        setMessage("Error while connecting with API. Try again.");
      } else {
        setSpacesList(JSON.parse(localStorage.getItem("movies")));
      }
    } else {
      const URL =
        "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSpacesList(data);
          localStorage.setItem("spaces", JSON.stringify(data));
        });
    }
  }, []);

  const [language, setLanguage] = useState(LOCALES.ENGLISH);

  return (
    <React.Fragment>
      <IntlProvider locale={language} messages={messages[language]}>
        <Router>
          <Navbar setLanguage={setLanguage}></Navbar>
          <Switch>
            <Route exact path="/">
              <HomesList />
            </Route>
            <Route exact path="/homes">
              <HomesList />
            </Route>
            <Route exact path="/homes/:id">
              <RoomsList />
            </Route>
          </Switch>
        </Router>
      </IntlProvider>
    </React.Fragment>
  );
};
export default Main;
