import React from "react";
import '../Profile/Profile.css';
import Header from "../Header/Header";

export default function Profile() {
    return (
        <>
            <Header/>
            <section className='profile'>
                <h2 className='profile__title'>Привет, Виталий!</h2>
                <form className='profile__form'>
                    <div className='profile__form-group'>
                        <label htmlFor='name' className='profile__label'>Имя</label>
                        <input
                            id='name'
                            type='text'
                            className='profile__input'
                            defaultValue='Виталий'
                            readOnly
                        />
                    </div>
                    <div className='profile__form-group'>
                        <label htmlFor='email' className='profile__label'>E-mail</label>
                        <input
                            id='email'
                            type='email'
                            className='profile__input'
                            defaultValue='pochta@yandex.ru'
                            readOnly
                        />
                    </div>
                </form>
                <div className='profile__buttons'>
                    <button className='profile__button'>Редактировать</button>
                    <button className='profile__button profile__button_red'>Выйти из аккаунта</button>
                </div>
            </section>
        </>
    );
}