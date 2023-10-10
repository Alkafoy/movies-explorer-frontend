import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import MoviesCard from "../MoviesCard/MoviesCard.jsx";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function SavedMovies() {
    return (
        <>
            <Header/>

            <savedMovies>
                <SearchForm/>
                <MoviesCardList/>
            </savedMovies>

            <Footer/>
        </>
    );
}
