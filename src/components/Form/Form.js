import React from "react"
import { Link } from "react-router-dom"
import "./Form.css"
import logo from "../../images/logo.svg"

function Form({
  children,
  title,
  buttonText,
  question,
  linkText,
  link,
  onSubmit,
  isDisabled,
  isLoading,
}) {
  return (
    <>
      {/* контейнер формы, который содержит все элементы формы. */}
      <div className="form__container">
        {/* ссылка на главную страницу с логотипом сайта. */}
        <Link to="/" className="form__logo">
          <img src={logo} alt="логотип cайта" />
        </Link>
        {/* заголовок формы.*/}
        <h3 className="form__title">{title}</h3>
        {/*форма с переданным обработчиком onSubmit. */}
        <form className="form" id="form" onSubmit={onSubmit} noValidate>
          {/* дочерние элементы компонента Form, которые будут отображаться внутри формы. */}
          {children}
          {/*кнопка отправки формы с условной активностью и стилями. */}
          <button
            type="submit"
            disabled={isDisabled ? true : false}
            className={
              isDisabled || isLoading
                ? "form__button-save form__button-save_inactive"
                : "form__button-save"
            }
          >
            {buttonText}
          </button>
        </form>
        {/* текст с вопросом и ссылкой. */}
        <p className="form__text">
          {question}
          {/*При клике на ссылку пользователь будет перенаправлен по адресу, указанному
         в link с помощью компонента Link из react-router-dom. */}
          <Link to={link} className="form__link">
            {linkText}
          </Link>
        </p>
      </div>
    </>
  )
}

export default Form
