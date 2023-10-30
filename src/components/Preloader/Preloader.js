import React from "react"
import "./Preloader.css"

// Компонент Preloader отвечает за отображение прелоадера, который
// показывается во время загрузки данных или выполнения асинхронных операций.
const Preloader = () => {
  // Прелоадер состоит из контейнера с классом "preloader__container",
  // внутри которого находится анимированный элемент с классом "preloader__pulse".
  return (
    <div className="preloader">
      <div className="preloader__container">
        <span className="preloader__pulse"></span>
      </div>
    </div>
  )
}

export default Preloader
