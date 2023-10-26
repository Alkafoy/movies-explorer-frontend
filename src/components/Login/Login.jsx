import React from "react";
import '../Login/Login.css';
import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";
import useFormValidation from "../../utils/useFormValidation";

export default function Login({onLogin}) {
    const {values, errors, isValid, handleEdit} = useFormValidation();

    function handleSubmit(evt) {
        evt.preventDefault()
        onLogin(values.email, values.password)
    }

    return (
        <main>
            <section className='login'>
                <div className='login__wrapper'>
                    <Link to='/'>
                        <img
                            className="headerLogo"
                            src={logo}
                            alt="Логотип заголовка"
                        />
                    </Link>
                    <h1 className='login__title'>Рады видеть!</h1>
                    <form className='login__form' onSubmit={handleSubmit}>
                        <div className='login__form-group'>
                            <label htmlFor='email' className='login__label'>E-mail</label>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                className='login__input'
                                placeholder='Укажите почту'
                                required
                                value={values.email ? values.email : ''}
                                onChange={handleEdit}
                            />
                        </div>
                        <div className='login__form-group'>
                            <label htmlFor='email' className='login__label'>Пароль</label>
                            <input
                                id='password'
                                name='password'
                                type='password'
                                className='login__input'
                                placeholder='Введите пароль'
                                minLength={4}
                                maxLength={20}
                                required
                                value={values.password ? values.password : ''}
                                onChange={handleEdit}
                            />
                        </div>
                        <nav className='login__buttons'>
                            <button className='login__button'>Войти</button>
                            <div className='login__links'>
                                <p className='login__text'>Ещё не зарегистрированы?</p>
                                <Link to='/signup' className='login__register-link'>Регистрация</Link>
                            </div>
                        </nav>
                    </form>
                </div>
            </section>
        </main>
    );
}