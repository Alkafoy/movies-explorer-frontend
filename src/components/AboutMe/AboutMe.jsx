import './AboutMe.css';
import React from "react";
import {Link} from "react-router-dom";
import picture from '../../images/text__COLOR_font-main.svg'

export default function () {
    return (
        <section  className='aboutMe'>
            <h2 className='aboutMe__title'>Студент</h2>
            <div className='aboutMe__wrapper'>
                <div className='aboutMe__description'>
                    <h3 className='aboutMe__description-title'>Сергей</h3>
                    <h4 className='aboutMe__description-subtitle'>Фронтенд-разработчик, 41 год</h4>
                    <p className='aboutMe__description-text'>Я&nbsp;живу в&nbsp;Казани, закончил строительный факультет КГАСУ. У&nbsp;меня есть жена и&nbsp;двое детей. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно поставил себе цель сменить профессию. С&nbsp;2018 года перепробовал много разных языков, пока не&nbsp;узнал про курс на&nbsp;Яндекс Практикуме. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
                    <Link to="https://github.com/Alkafoy" className='aboutMe__link'>Github</Link>
                </div>
                <div className='aboutMe__image'></div>
            </div>
        </section>
    )
}