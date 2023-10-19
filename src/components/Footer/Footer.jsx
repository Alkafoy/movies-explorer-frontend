import './Footer.css';
import React from "react";
import {Link} from "react-router-dom";

export default function () {
    return (
        <footer className='footer'>
            <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer__wrapper'>
                <p className='footer__year'>© 2023</p>
                <div className='footer__links'>
                    <Link to={'https://practicum.yandex.ru/'} target='_blank' className='footer__link'>Яндекс.Практикум</Link>
                    <Link to={'https://github.com/Alkafoy'} target='_blank' className='footer__link'>Github</Link>
                </div>
            </div>
        </footer>
    )
}