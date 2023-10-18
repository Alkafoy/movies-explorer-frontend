import React, {useState} from "react";
import './MoviesCard.css';
import movieImage from '../../images/pic__COLOR_pic.png';
import {useLocation} from "react-router-dom";

export default function MoviesCard() {
    const {pathname} = useLocation();
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
                {pathname === '/movies' ? (!isSaved ? (
                        <button type="button" onClick={toggleSave} className='moviesCard__button'>Сохранить</button>
                    ) : (
                        <button type="button" onClick={toggleSave} className='moviesCard__button_saved'></button>
                    )
                ) : (
                    <button type="button" className='moviesCard__button_delete'></button>
                )}
            </div>
        </article>
    )
}