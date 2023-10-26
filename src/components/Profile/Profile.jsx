import React, {useContext, useEffect, useState} from "react";
import '../Profile/Profile.css';
import Header from "../Header/Header";
import {Link} from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useFormValidation from "../../utils/useFormValidation";

export default function Profile({logout, editUserData, setIsError }) {
    const currentUser = useContext(CurrentUserContext)
    const [isVisible, setIsVisible] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [changesInput, setChangesInput] = useState({
        name: '',
        email: '',
    });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    const {values, errors, isValid, setIsValid, handleChange, setValues, resetForm} = useFormValidation()

    useEffect(() => {
            resetForm({name: currentUser.name, email: currentUser.email})
        }, [resetForm, currentUser, isEditing]
    )

    function handleSubmit(evt) {
        evt.preventDefault()
        if (isValid) {
            editUserData(values.name, values.email);
        }
    }

    function handleEdit(evt) {
        evt.preventDefault();
        setIsEditing(!isEditing);
        setIsVisible(!isVisible);
        setIsValid(true);
        console.log(isEditing);
    }

    useEffect(() => {
        setValues({ currentUser });
        setChangesInput({ name: currentUser.name, email: currentUser.email });
    }, [currentUser, setValues, setChangesInput])

    useEffect(() => {
        if (
            values.name === changesInput.name
            && values.email === changesInput.email
        ) {
            setIsEditing(true);
        } else {
            setIsEditing(false);
        }
    }, [values])

    return (
        <>
            <Header/>
            <main>
                <section className='profile'>
                    <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
                    <form className='profile__form'
                          onSubmit={handleSubmit}
                    >
                        <div className='profile__form-group'>
                            <label htmlFor='name' className='profile__label'>Имя</label>
                            <input
                                id='name'
                                name='name'
                                type='text'
                                className='profile__input'
                                placeholder='Введите имя'
                                value={name}
                                required
                                error={errors.name}
                                onChange={handleChange}
                                disabled={!isEditing}
                            />
                        </div>
                        <div className='profile__form-group'>
                            <label htmlFor='email' className='profile__label'>E-mail</label>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                className='profile__input'
                                placeholder='Введите e-mail'
                                value={values.email}
                                error={errors.email}
                                onChange={handleChange}
                                disabled={!isEditing}
                            />
                        </div>
                        <div className='profile__buttons'>
                            <button
                                className='profile__button-edit profile__button-edit_active'
                                type='submit'
                                onClick={handleEdit}
                                isEdit={isEditing}
                            >Редактировать
                            </button>
                            <button className='profile__button-submit' type="submit">Сохранить</button>
                            <Link to='/signin' onClick={logout}
                                  className='profile__button-edit profile__button-edit_active profile__button-edit_red'>Выйти
                                из аккаунта</Link>
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
}
