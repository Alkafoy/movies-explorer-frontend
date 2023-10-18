import React from "react";
import '../NotFound/NotFound.css';
import {Link} from "react-router-dom";

export default function NotFound() {
    return (
        <main>
            <section className='notFound'>
                <div className='notFound__wrapper'>
                    <h1 className='notFound__title'>404</h1>
                    <p className='notFound__text'>Страница не найдена</p>
                    <Link to='/' className='notFound__link'>Назад</Link>
                </div>
            </section>
        </main>
    )
}

