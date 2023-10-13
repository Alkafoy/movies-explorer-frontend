import React from "react";
import '../NotFound/NotFound.css';
import {Link} from "react-router-dom";

export default function NotFound() {
    return (
        <section className='notFound'>
            <div className='notFound__wrapper'>
                <h2 className='notFound__title'>404</h2>
                <p className='notFound__text'>Страница не найдена</p>
            </div>
            <Link to='/' className='notFound__link'>Назад</Link>
        </section>

    )
}

