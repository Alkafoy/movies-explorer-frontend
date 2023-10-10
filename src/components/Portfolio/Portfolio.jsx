import './Portfolio.css';
import React from "react";
import {Link} from "react-router-dom";

export default function () {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__list'>
                <li className='portfolio__item'>
                    <Link to={'https://github.com/Alkafoy/how-to-learn.git'} target='_blank' className='portfolio__link'>
                        <p className='portfolio__text'>Статичный сайт</p>
                        <div className='portfolio__pic'></div>
                    </Link>
                </li>
                <li className='portfolio__item'>
                    <Link to={'https://github.com/Alkafoy/russian-travel.git'} target='_blank' className='portfolio__link'>
                        <p className='portfolio__text'>Адаптивный сайт</p>
                        <div className='portfolio__pic'></div>
                    </Link>
                </li>
                <li className='portfolio__item '>
                    <Link to={'https://github.com/Alkafoy/react-mesto-api-full-gha.git'} target='_blank' className='portfolio__link'>
                        <p className='portfolio__text'>Одностраничное приложение</p>
                        <div className='portfolio__pic'></div>
                    </Link>
                </li>
            </ul>
        </section>
    )
}