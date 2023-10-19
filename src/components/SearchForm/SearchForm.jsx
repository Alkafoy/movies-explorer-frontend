import React from "react";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.jsx';
import './SearchForm.css';

export default function SearchForm() {
    return (
        <section className='searchForm' aria-label='Строка поиска'>
            <form className='searchForm__wrapper'>
                <input
                    className='searchForm__input'
                    type="text"
                    placeholder="Фильм"
                />
                <button type="submit" className='searchForm__submit'>Поиск</button>
            </form>
            <FilterCheckbox/>
        </section>
    )
};
