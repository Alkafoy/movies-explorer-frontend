import './Header.css';
import logo from '../../images/logo.png'
import Navigation from '../Navigation/Navigation.jsx';
import React, {useState} from "react";
import {Link, useLocation} from 'react-router-dom';

export default function Header({isLoggedIn}) {
    const {pathname} = useLocation();
    const [showLinks, setShowLinks] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleNav = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleMenu = () => {
        if (window.innerWidth < 769) {
            setShowLinks(!showLinks);
        } else {
            setShowLinks(true);
        }
    };

// Вызываем функцию toggleMenu при загрузке страницы
    window.addEventListener("load", toggleMenu);
// Вызываем функцию toggleMenu при изменении размера окна
    window.addEventListener("resize", toggleMenu);

    return (
        <header className={pathname === '/' ? 'header' : 'header_movies'}>
            <Link to='/'>
                <img
                    className="header__logo"
                    src={logo}
                    alt="Логотип заголовка"
                />
            </Link>
            {
                !isLoggedIn ? (
                    (
                        showLinks ? (
                            <nav className="header__right-wrapper">
                                <div className="header__link-wrapper">
                                    <Link to="/movies" className="header__link">
                                        Фильмы
                                    </Link>
                                    <Link to="/saved-movies" className="header__link">
                                        Сохранённые фильмы
                                    </Link>
                                </div>
                                <Link to="/profile"
                                      className={pathname === '/' ? 'header__profile' : 'header__profile_movies'}>
                                </Link>
                            </nav>
                        ) : (
                            <button
                                className="header__menu-button"
                                onClick={toggleNav}>
                            </button>
                        )
                    )
                ) : (
                    <nav className="header__right-wrapper">
                        <Link to="/signup" className="header__sign-link">
                            Регистрация
                        </Link>
                        <Link to="/signin" className="header__button">Войти</Link>
                    </nav>
                )}
            <Navigation isOpen={isMenuOpen} onClose={toggleNav} />

        </header>
    )
}