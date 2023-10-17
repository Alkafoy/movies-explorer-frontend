import './Promo.css';
import React from "react";
import {HashLink} from 'react-router-hash-link';

export default function Promo() {
    return (
        <section className='promo'>
            <div className='promo__wrapper'>
                <h1 className='promo__title'>Учебный проект студента факультета <nobr>Веб-разработки</nobr>.</h1>
                <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <HashLink smooth to='#aboutProject' className='promo__bottom'>Узнать больше</HashLink>
            </div>
            <div className='promo__image'></div>
        </section>
    )
}