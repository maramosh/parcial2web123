import React from "react";
import { LOCALES } from "../../i18n/locales";

export const I18nSelect = ({ setLanguage }) => {
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={(event) => setLanguage(event.target.value)}
    >
      <option selected>Change Language</option>
      <option value={LOCALES.SPANISH}>Spanish</option>
      <option value={LOCALES.ENGLISH}>English</option>
    </select>
  );
};
