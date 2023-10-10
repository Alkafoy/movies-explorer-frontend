import './Header.css';
import logo from '../../images/logo.png'
import React from "react";
import {Link} from 'react-router-dom';

export default function Header({isLoggedIn}) {
    return (
        <header className="header">
            <Link to='/'>
                <img
                    className="header__logo"
                    src={logo}
                    alt="Логотип заголовка"
                />
            </Link>
            {
                isLoggedIn ? (
                    <div className="header__right-wrapper">
                        <div className="header__link-wrapper">
                            <Link to="/movies" className="header__link">
                                Фильмы
                            </Link>
                            <Link to="/saved-movies" className="header__link">
                                Сохранённые фильмы
                            </Link>
                        </div>
                        <Link to="/profile" className="header__profile">

                        </Link>
                    </div>
                ) : (
                    <div className="header__right-wrapper">
                        <Link to="/signup" className="header__sign-link">
                            Регистрация
                        </Link>
                        <Link to="/signin" className="header__button">Войти</Link>
                    </div>
                )}
        </header>
    )
}