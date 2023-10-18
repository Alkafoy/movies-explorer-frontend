import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function SavedMovies() {
    return (
        <>
            <Header/>

            <main className='main'>
                <SearchForm/>
                <MoviesCardList/>
            </main>

            <Footer/>
        </>
    );
}
