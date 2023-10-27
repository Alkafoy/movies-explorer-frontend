import React, { useState, useEffect } from "react"
import "./Movies.css"
import Header from "../Header/Header"
import MoviesCardList from "./MoviesCardList/MoviesCardList"
import SearchForm from "./SearchForm/SearchForm"
import { filterMovies, filterDuration } from "../../utils/utils"
import * as movies from "../../utils/MoviesApi"
import Footer from "../Footer/Footer"

//Компонент Movies отображает страницу фильмов и содержит состояния,
// эффекты и функции, связанные с фильтрацией и поиском фильмов.
// Определение компонента Movies
function Movies({ loggedIn, handleLikeFilm, onDeleteCard, savedMovies }) {
  // Состояния компонента
  const [isLoading, setIsLoading] = useState(false) // флаг загрузки данных о фильмах.
  const [initialCardsMovies, setInitialCardsMovies] = useState([]) // массив с исходными фильмами.
  const [filteredMovies, setFilteredMovies] = useState([]) // массив с отфильтрованными фильмами.
  const [isShortFilm, setisShortFilm] = useState(false) // флаг короткометражных фильмов.
  const [isReqError, setisReqError] = useState(false) // флаг ошибки запроса.
  const [isNotFound, setIsNotFound] = useState(false) // флаг, указывающий, были ли найдены фильмы по запросу.

  // Функция handleUpdateFilteredMovies используется для фильтрации фильмов
  //по запросу и продолжительности. Она обновляет состояния
  //initialCardsMovies и filteredMovies и сохраняет данные в localStorage.
  function handleUpdateFilteredMovies(movies, query, short) {
    const moviesCardList = filterMovies(movies, query, short)
    setInitialCardsMovies(moviesCardList)
    setFilteredMovies(short ? filterDuration(moviesCardList) : moviesCardList)
    localStorage.setItem("movies", JSON.stringify(moviesCardList))
    localStorage.setItem("allMovies", JSON.stringify(movies))
  }

  // Функция handleShortFilmToggle используется для установки флага
  // короткометражных фильмов. Она обновляет состояние isShortFilm
  // и обновляет состояние filteredMovies в зависимости от значения isShortFilm.
  // Также она сохраняет состояние isShortFilm в localStorage.
  function handleShortFilmToggle() {
    setisShortFilm(!isShortFilm)
    if (!isShortFilm) {
      if (filterDuration(initialCardsMovies).length === 0) {
        setFilteredMovies(filterDuration(initialCardsMovies))
      } else {
        setFilteredMovies(filterDuration(initialCardsMovies))
      }
    } else {
      setFilteredMovies(initialCardsMovies)
    }
    localStorage.setItem("shortMovies", !isShortFilm)
  }

  // Функция onSearchMoviesFilms используется для поиска фильмов
  // по запросу. Она сохраняет запрос и флаг короткометражных фильмов
  // в localStorage. Если фильмы уже находятся в localStorage, она использует их для фильтрации.
  function onSearchMoviesFilms(query) {
    localStorage.setItem("movieSearch", query)
    localStorage.setItem("shortMovies", isShortFilm)

    if (localStorage.getItem("allMovies")) {
      const movies = JSON.parse(localStorage.getItem("allMovies"))
      handleUpdateFilteredMovies(movies, query, isShortFilm)
    } else {
      setIsLoading(true)
      movies
        .getMovies()
        .then((cardsData) => {
          handleUpdateFilteredMovies(cardsData, query, isShortFilm)
          setisReqError(false)
        })
        .catch((err) => {
          setisReqError(true)
          console.log(err)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }

  // Получение флага короткометражных фильмов из localStorage
  useEffect(() => {
    if (localStorage.getItem("shortMovies") === "true") {
      setisShortFilm(true)
    } else {
      setisShortFilm(false)
    }
  }, [])

  // Получение списка фильмов из localStorage
  useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"))
      setInitialCardsMovies(movies)
      if (localStorage.getItem("shortMovies") === "true") {
        setFilteredMovies(filterDuration(movies))
      } else {
        setFilteredMovies(movies)
      }
    } else {
      // setIsNotFound(true);
    }
  }, [])

  // Проверка, были ли найдены фильмы по запросу
  useEffect(() => {
    if (localStorage.getItem("movieSearch")) {
      if (filteredMovies.length === 0) {
        setIsNotFound(true)
      } else {
        setIsNotFound(false)
      }
    } else {
      setIsNotFound(false)
    }
  }, [filteredMovies])

  // Рендер компонента Movies
  return (
    <section className="movies">
      <Header loggedIn={loggedIn} />
      <SearchForm
        onSearchMoviesFilms={onSearchMoviesFilms}
        onFilterMovies={handleShortFilmToggle}
        isShortFilm={isShortFilm}
      />
      <MoviesCardList
        cards={filteredMovies}
        isLoading={isLoading}
        isSavedFilms={false}
        isReqError={isReqError}
        isNotFound={isNotFound}
        savedMovies={savedMovies}
        handleLikeFilm={handleLikeFilm}
        onDeleteCard={onDeleteCard}
      />
      <Footer />
    </section>
  )
}

export default Movies
