import React from "react";
import './FilterCheckbox.css'

export default function FilterCheckbox() {
    return (
        <div className='filterCheckbox'>
            <label className="filterCheckbox__usually">
                <input type="checkbox" id="short-film-checkbox"/>
                <span className="filterCheckbox__custom"></span>
                <span className="filterCheckbox__label">Короткометражки</span>
            </label>
        </div>

    )
}
