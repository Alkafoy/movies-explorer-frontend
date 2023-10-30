import React from "react";
import "./SearchError.css";

// Компонент представляет собой компонент для отображения сообщения
// об ошибке поиска. Он используется для вывода текста ошибки, связанного с поиском.
function SearchError({ errorText }) {
  return <p className="search__error search__error_margin">{errorText}</p>;
}

export default SearchError;
