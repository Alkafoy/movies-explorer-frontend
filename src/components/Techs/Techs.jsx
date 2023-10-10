import './Techs.css';
import React from "react";

export default function () {
    return (
        <section className='techs'>
            <h2 className='techs__title'>Технологии</h2>
            <div className='techs__description'>
                <p className='techs__description-title'>7 технологий</p>
                <p className='techs__description-text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <ul className='techs__list'>
                <li className='techs__item'>HTML</li>
                <li className='techs__item'>CSS</li>
                <li className='techs__item'>JS</li>
                <li className='techs__item'>React</li>
                <li className='techs__item'>Git</li>
                <li className='techs__item'>Express.js</li>
                <li className='techs__item'>mongoDB</li>
            </ul>
        </section>
    )
}