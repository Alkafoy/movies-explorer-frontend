import './Promo.css';
import React from "react";
import {Link} from 'react-router-dom';

export default function Promo() {
    return (
        <section className='promo'>
            <div className='promo__wrapper'>
                <h1 className='promo__title'>Учебный проект студента факультета <nobr>Веб-разработки</nobr>.</h1>
                <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <Link to='/' className='promo__bottom'>Узнать больше</Link>
            </div>
            <div className='promo__image'></div>
        </section>
    )
}