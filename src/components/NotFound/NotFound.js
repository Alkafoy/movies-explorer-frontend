import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
    const nav = useNavigate();
    function goToNavigate() {
        nav(-2)
    }
  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__descrintion">Страница не найдена</p>
      <button onClick={goToNavigate} className="not-found__button">
        Назад
      </button>
    </section>
  );
}

export default NotFound;
