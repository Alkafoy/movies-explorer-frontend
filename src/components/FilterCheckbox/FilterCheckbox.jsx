import React from "react";
import './FilterCheckbox.css'

export default function FilterCheckbox() {
    return (
        <div className='filterCheckbox'>
            <label className="filterCheckbox__usually">
                <input type="checkbox" id="short-film-checkbox"/>
                <div className="filterCheckbox__custom"></div>
                <span className="filterCheckbox__label">Короткометражки</span>
            </label>
        </div>

    )
}
