import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";


export default function MoviesCardList() {
    return (
        <section className='moviesCardList' aria-label="Фильмы">
            <ul className='moviesCardList__list'>
                <li className='moviesCardList__element'><MoviesCard/></li>
                <li className='moviesCardList__element'><MoviesCard/></li>
                <li className='moviesCardList__element'><MoviesCard/></li>
                <li className='moviesCardList__element'><MoviesCard/></li>
                <li className='moviesCardList__element'><MoviesCard/></li>
                <li className='moviesCardList__element'><MoviesCard/></li>
                <li className='moviesCardList__element'><MoviesCard/></li>
                <li className='moviesCardList__element'><MoviesCard/></li>
                <li className='moviesCardList__element'><MoviesCard/></li>
                <li className='moviesCardList__element'><MoviesCard/></li>
                <li className='moviesCardList__element'><MoviesCard/></li>
                <li className='moviesCardList__element'><MoviesCard/></li>
            </ul>
        </section>
    )
}