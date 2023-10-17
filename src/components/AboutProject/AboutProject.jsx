import './AboutProject.css';
import React from "react";
import {Link} from 'react-router-dom';

export default function () {
    return (
        <section id={"aboutProject"} className='aboutProject'>
            <h2 className='aboutProject__title'>О проекте</h2>
            <ul className='aboutProject__list'>
                <li className='aboutProject__element'>
                    <h3 className='aboutProject__element-title'>Дипломный проект включал 5&nbsp;этапов</h3>
                    <p className='aboutProject__element-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
                </li>
                <li className='aboutProject__element'>
                    <h3 className='aboutProject__element-title'>На&nbsp;выполнение диплома ушло 5&nbsp;недель</h3>
                    <p className='aboutProject__element-text'>У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <div className='aboutProject__time-schedule'>
                <p className='aboutProject__schedule-item aboutProject__custom-back1 aboutProject__custom-text1'>1 неделя</p>
                <p className='aboutProject__schedule-item aboutProject__custom-back2 aboutProject__custom-text2'>4 недели</p>
                <p className='aboutProject__schedule-item'>Back-end</p>
                <p className='aboutProject__schedule-item'>Front-end</p>
            </div>
        </section>
    )
}