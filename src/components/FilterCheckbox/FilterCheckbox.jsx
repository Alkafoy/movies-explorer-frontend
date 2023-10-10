import React from "react";
import './FilterCheckbox.css'

export default function FilterCheckbox() {
    return (
        <label className="filterCheckbox__custom">
            <input type="checkbox" id="short-film-checkbox" />
            <div className="filterCheckbox"></div>
            <span className="filterCheckbox__label">Короткометражки</span>
        </label>

    )
}
