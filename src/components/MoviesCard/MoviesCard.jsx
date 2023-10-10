import React from "react";
import './MoviesCard.css';
import movieImage from '../../images/pic__COLOR_pic.png';

export default function MoviesCard() {
    return (
        <article>
            <div className="moviesCard__caption">
                <h2 className='moviesCard__text'>В погоне за Бенкси</h2>
                <span className='moviesCard__duration'>0ч 42м</span>
            </div>
            <img
                className="moviesCard__image"
                src={movieImage}
                alt={`шаблон фильма`}
            />
            <div className="moviesCard__save-container">
                <button type="button" className='moviesCard__button'>Сохранить</button>
            </div>
        </article>
    )
}