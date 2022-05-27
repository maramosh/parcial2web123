import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Card } from "../../card/Card";
import "./HomesList.css";

export const HomesList = () => {
  const [spacesList, setSpacesList] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("spaces") === null) {
        setMessage("Error while connecting with API. Try again.");
      } else {
        setSpacesList(JSON.parse(localStorage.getItem("spaces")));
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

  return (
    <div className="container home">
      <h1>
        <FormattedMessage id="spaces" />
      </h1>
      <div className="homeList">
        {spacesList && spacesList.map((home) => <Card props={home} />)}
      </div>
    </div>
  );
};
