import React from "react";
import '../Login/Login.css';
import Header from "../Header/Header";
import logo from "../../images/logo.png";
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <section className='login'>
            <div className='login__wrapper'>
                <Link to='/'>
                    <img
                        className="header__logo"
                        src={logo}
                        alt="Логотип заголовка"
                    />
                </Link>
                <h2 className='login__title'>Рады видеть!</h2>
                <form className='login__form'>
                    <div className='login__form-group'>
                        <label htmlFor='email' className='login__label'>E-mail</label>
                        <input
                            id='email'
                            type='email'
                            className='login__input'
                            defaultValue='pochta@yandex.ru'
                            readOnly
                        />
                    </div>
                    <div className='login__form-group'>
                        <label htmlFor='email' className='login__label'>E-mail</label>
                        <input
                            id='email'
                            type='email'
                            className='login__input'
                            defaultValue='pochta@yandex.ru'
                            readOnly
                        />
                    </div>
                </form>
                <button className='login__button'>Войти</button>
                <div className='login__links'>
                    <p className='login__text'>Ещё не зарегистрированы?</p>
                    <Link to='/signup' className='login__register-link'>Регистрация</Link>
                </div>
            </div>
        </section>
    );
}