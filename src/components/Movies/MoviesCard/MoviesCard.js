import React from "react";
import { durationConverter } from "../../../utils/utils";
import movieImage from "../../../images/pic__COLOR_pic.png";
import "./MoviesCard.css";

//Компонент MoviesCard отображает карточку фильма и содержит функции
// и данные, связанные с отображением и взаимодействием с фильмами.
function MoviesCard({
  card,
  isSavedFilms,
  handleLikeFilm,
  onDeleteCard,
  saved,
  savedMovies,
}) {
  // Обработчик клика по карточке фильма
  // Если фильм сохранен, вызывается функция onDeleteCard с удалением
  // соответствующего фильма из savedMovies. В противном случае
  // вызывается функция handleLikeFilm с передачей выбранного фильма.
  function onCardClick() {
    if (saved) {
      onDeleteCard(savedMovies.filter((m) => m.movieId === card.id)[0]);
    } else {
      handleLikeFilm(card);
    }
  }

  // Обработчик удаления карточки фильма
  function onDelete() {
    onDeleteCard(card);
  }

  // Класс кнопки лайка
  //cardLikeButtonClassName - это переменная, которая определяет
  // класс кнопки лайка в зависимости от значения saved.
  // Если фильм сохранен, применяется класс card__like-button_active,
  // иначе - класс card__like-button.
  const cardLikeButtonClassName = `${
    saved ? "moviesCard__button moviesCard__button_saved" : "moviesCard__button"
  }`;

  return (
    <>
      <article className="moviesCard" key={card.id}>
        <div className="moviesCard__caption">
          <h2 className="moviesCard__text">{card.nameRU}</h2>
          <span className="moviesCard__duration">
            {durationConverter(card.duration)}
          </span>
        </div>

        <a href={card.trailerLink} target="_blank" rel="noreferrer">
          <img
            className="moviesCard__image"
            alt={card.nameRU}
            src={
              isSavedFilms
                ? card.image
                : `https://api.nomoreparties.co/${card.image.url}`
            }
          />
        </a>

        <div className="moviesCard__save-container">
          {isSavedFilms ? (
            <button
              type="button"
              className="moviesCard__button_delete"
              onClick={onDelete}
            ></button>
          ) : (
            <button
              type="button"
              className={cardLikeButtonClassName}
              onClick={onCardClick}
            ></button>
          )}
        </div>
      </article>
    </>
  );
}

export default MoviesCard;
