import React from "react"
import "../Form/Form.css"
import Form from "../Form/Form"
import useForm from "../hooks/useForm"
import { EMAIL_PATTERN } from "../../utils/constants"

// Определение компонента Login
function Login({ onAuthorization, isLoading }) {
  // Использование пользовательского хука useForm()
  const { enteredValues, errors, handleChangeInput, isFormValid } = useForm()
  // Обработчик отправки формы
  function handleFormSubmit(event) {
    event.preventDefault()
    // Вызов функции onAuthorization с данными введенных значений формы
    onAuthorization({
      email: enteredValues.email,
      password: enteredValues.password,
    })
  }

  return (
    <Form
      title="Рады видеть!"
      buttonText="Войти"
      question="Еще не зарегистрированы?"
      linkText=" Регистрация"
      link="/signup"
      onSubmit={handleFormSubmit}
      isDisabled={!isFormValid}
      isLoading={isLoading}
      noValidate
    >
      <label className="form__label">
        E-mail
        <input
          name="email"
          className="form__input"
          id="email-input"
          type="email"
          required
          placeholder="почта"
          onChange={handleChangeInput}
          pattern={EMAIL_PATTERN}
          value={enteredValues.email || ""}
          
        />
        <span className="form__input-error">{errors.email}</span>
      </label>
      <label className="form__label">
        Пароль
        <input
          name="password"
          className="form__input"
          id="password-input"
          type="password"
          minLength="4"
          maxLength="10"
          required
          placeholder="пароль"
          onChange={handleChangeInput}
          value={enteredValues.password || ""}
        />
        <span className="form__input-error">{errors.password}</span>
      </label>
    </Form>
  )
}

//Этот код определяет компонент Login, который представляет форму
// входа пользователя. Он использует другие компоненты и хуки для
//обеспечения функциональности формы. Комментарии помогают понять,
// что делает каждая часть кода и предоставляют контекст
// для последующего чтения и поддержки кода.

export default Login
