import React, {useState} from "react";
import '../Register/Register.css';
import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";
import useFormValidation from "../../utils/useFormValidation";

export default function Register({ onRegister}) {
    const {values, errors, isValid, handleEdit} = useFormValidation();

    function handleSubmit(evt) {
        evt.preventDefault()
        onRegister(values.name, values.email, values.password)
    }

    return (
        <main>
            <section className='register' >
                <div className='register__wrapper'>
                    <Link to='/'>
                        <img
                            className="headerLogo"
                            src={logo}
                            alt="Логотип заголовка"
                        />
                    </Link>
                    <h1 className='register__title'>Добро пожаловать!</h1>
                    <form className='register__form' onSubmit={handleSubmit}>
                        <div className='register__form-group'>
                            <label htmlFor='email' className='register__label'>Имя</label>
                            <input
                                id='name'
                                name='name'
                                type='text'
                                className='register__input'
                                placeholder='Введите имя'
                                minLength={2}
                                maxLength={40}
                                required
                                value={values.name ? values.name : ''}
                                onChange={handleEdit}
                            />
                        </div>
                        <div className='register__form-group'>
                            <label htmlFor='email' className='register__label'>E-mail</label>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                className='register__input'
                                placeholder='Укажите почту'
                                required
                                value={values.email ? values.email : ''}
                                onChange={handleEdit}
                            />
                        </div>
                        <div className='register__form-group'>
                            <label htmlFor='email' className='register__label'>Пароль</label>
                            <input
                                id='password'
                                name='password'
                                type='password'
                                className='register__input register__input_red'
                                placeholder='Придумайте пароль'
                                minLength={4}
                                maxLength={20}
                                required
                                value={values.password ? values.password : ''}
                                onChange={handleEdit}
                            />
                        </div>
                        <span className='register__span'>Что-то пошло не так...</span>
                        <nav className='register__buttons'>
                            <button className='register__button' type="submit">Зарегистрироваться</button>
                            <div className='register__links'>
                                <p className='register__text'>Уже зарегистрированы?</p>
                                <Link to='/signin' className='register__login-link'>Войти</Link>
                            </div>
                        </nav>
                    </form>
                </div>
            </section>
        </main>
    );
}