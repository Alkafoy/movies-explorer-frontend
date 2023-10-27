import React from "react"
import "./FilterCheckbox.css"

function FilterCheckbox({ onFilterMovies, isShortFilm }) {
  return (
    <form className="filter">
      <input
        className="filter__checkbox"
        type="checkbox"
        onChange={onFilterMovies}
        checked={isShortFilm}
      ></input>
      <span className="filter__title">Короткометражки</span>
    </form>
  )
}

export default FilterCheckbox
