import React from "react";
import '../Register/Register.css';
import logo from "../../images/logo.png";
import {Link} from "react-router-dom";

export default function Register() {
    return (
        <section className='register'>
            <main className='register__wrapper'>
                <Link to='/'>
                    <img
                        className="headerLogo"
                        src={logo}
                        alt="Логотип заголовка"
                    />
                </Link>
                <h1 className='register__title'>Добро пожаловать!</h1>
                <form className='register__form'>
                    <div className='register__form-group'>
                        <label htmlFor='email' className='register__label'>Имя</label>
                        <input
                            id='name'
                            type='text'
                            className='register__input'
                            defaultValue='Виталий'
                        />
                    </div>
                    <div className='register__form-group'>
                        <label htmlFor='email' className='register__label'>E-mail</label>
                        <input
                            id='email'
                            type='email'
                            className='register__input'
                            defaultValue='pochta@yandex.ru'
                        />
                    </div>
                    <div className='register__form-group'>
                        <label htmlFor='email' className='register__label'>Пароль</label>
                        <input
                            id='password'
                            type='password'
                            className='register__input register__input_red'
                            defaultValue='11111111111111'
                        />
                    </div>
                    <span className='register__span'>Что-то пошло не так...</span>
                </form>
                <nav className='register__buttons'>
                    <button className='register__button'>Зарегистрироваться</button>
                    <div className='register__links'>
                        <p className='register__text'>Уже зарегистрированы?</p>
                        <Link to='/signin' className='register__login-link'>Войти</Link>
                    </div>
                </nav>
            </main>
        </section>
    );
}