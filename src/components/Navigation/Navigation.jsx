import './Navigation.css';
import React from "react";
import {Link} from 'react-router-dom';

export default function Navigation({isOpen, onClose}) {
    return (
        <nav className={`navigation ${isOpen ? 'navigation_open' : ''}`}>
            <button className='navigation__close-button' onClick={onClose}/>
            <ul className='navigation__link-wrapper'>
                <li className='navigation__link-item'>
                    <Link to="/" className='navigation__link'>Главная</Link>
                </li>
                <li className='navigation__link-item'>
                    <Link to="/movies" className='navigation__link'>Фильмы</Link>
                </li>
                <li className='navigation__link-item'>
                    <Link to="/saved-movies" className='navigation__link'>Сохранённые фильмы</Link>
                </li>
            </ul>
            <Link to="/profile" className='navigation__profile'></Link>
        </nav>
    )
}
