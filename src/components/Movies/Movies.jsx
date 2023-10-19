import React from "react";
import SearchForm from "../SearchForm/SearchForm.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import More from "../More/More.jsx";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Movies() {
    return (
        <>
            <Header/>

            <main>
                <SearchForm/>
                <Preloader/>
                <MoviesCardList/>
                <More/>
            </main>

            <Footer/>
        </>
    );
}
