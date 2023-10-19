import './Header.css';
import logo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation.jsx';
import React, {useState} from "react";
import {Link, useLocation} from 'react-router-dom';

export default function Header({isLoggedIn}) {
    const {pathname} = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleNav = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`header${pathname !== '/' ? ' header_movies' : ''}`}>
            <Link to='/'>
                <img
                    className="headerLogo"
                    src={logo}
                    alt="Логотип заголовка"
                />
            </Link>
            {
                !isLoggedIn ? (
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
                              className={`header__profile${pathname !== '/' ? ' header__profile_movies' : ''}`}>
                        </Link>
                        <button
                            type='button'
                            className="header__menu-button"
                            onClick={toggleNav}>
                        </button>
                    </nav>

                ) : (
                    <nav className="header__right-wrapper">
                        <Link to="/signup" className="header__sign-link">
                            Регистрация
                        </Link>
                        <Link to="/signin" className="header__button">Войти</Link>
                    </nav>
                )}
            <Navigation isOpen={isMenuOpen} onClose={toggleNav}/>

        </header>
    )
}