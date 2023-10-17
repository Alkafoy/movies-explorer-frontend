import React, {useState} from "react";
import './MoviesCard.css';
import movieImage from '../../images/pic__COLOR_pic.png';

export default function MoviesCard() {
    const [isSaved, setIsSaved] = useState(false);

    const toggleSave = () => {
        setIsSaved(!isSaved);
    };

    return (
        <article className="moviesCard">
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
                {
                    !isSaved ? (
                        <button type="button" onClick={toggleSave} className='moviesCard__button'>Сохранить</button>
                    ) : (
                        <button type="button" onClick={toggleSave} className='moviesCard__button_saved'></button>
                    )
                }

            </div>
        </article>
    )
}