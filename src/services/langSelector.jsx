import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const LangSelector = () => {
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState("es");
  const changeLanguage = (lng) => i18n.changeLanguage(lng);
  const handleClick = (val) => {
    changeLanguage(val);
    setSelected((prev) => (prev = val));
  };
  return (
    <section className="language-selector text-end p-2">
      <button
        className={`btn btn-outline-secondary ${
          selected === "en" ? "active" : ""
        }`}
        onClick={() => handleClick("en")}
      >
        <img
          className="img-fluid"
          style={{ width: "30px" }}
          src="https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png"
          alt=""
        />
      </button>
      <button
        className={`btn btn-outline-secondary ${
          selected === "es" ? "active" : ""
        }`}
        onClick={() => handleClick("es")}
      >
        <img
          className="img-fluid"
          style={{ width: "30px" }}
          src="https://cdn.countryflags.com/thumbs/spain/flag-400.png"
          alt=""
        />
      </button>
    </section>
  );
};
