import React from "react"
import "../Form/Form.css"
import Form from "../Form/Form"
import useForm from "../hooks/useForm"
import { EMAIL_PATTERN, USERNAME_PATTERN } from "../../utils/constants"

// Компонент Register представляет собой форму регистрации.

function Register({ onRegister, isLoading }) {
  // Использует хук useForm для управления состоянием формы.
  const { enteredValues, errors, handleChangeInput, isFormValid } = useForm()

  // При отправке формы вызывается функция onRegister,
  // передавая в нее введенные пользователем данные.
  function handleFormSubmit(event) {
    event.preventDefault()
    onRegister({
      name: enteredValues.name,
      email: enteredValues.email,
      password: enteredValues.password,
    })
  }

  // Использует компонент Form для отображения формы.
  // Компонент содержит поля ввода для имени, электронной почты и пароля.
  return (
    <Form
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText=" Войти"
      link="/signin"
      onSubmit={handleFormSubmit}
      isDisabled={!isFormValid}
      isLoading={isLoading}
    >
      <label className="form__label">
        Имя
        <input
          name="name"
          className="form__input"
          id="name-input"
          type="text"
          minLength="2"
          maxLength="40"
          required
          placeholder="имя"
          onChange={handleChangeInput}
          value={enteredValues.name || ""}
          pattern={USERNAME_PATTERN}
        />
        {/* Ошибки валидации отображаются под соответствующими полями ввода. */}
        <span className="form__input-error">{errors.name}</span>
      </label>
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
        {/* Ошибки валидации отображаются под соответствующими полями ввода. */}
        <span className="form__input-error">{errors.email}</span>
      </label>
      <label className="form__label">
        Пароль
        <input
          name="password"
          className="form__input"
          id="password-input"
          type="password"
          required
          minLength="4"
          maxLength="10"
          placeholder="пароль"
          onChange={handleChangeInput}
          value={enteredValues.password || ""}
        />
        {/* Ошибки валидации отображаются под соответствующими полями ввода. */}
        <span className="form__input-error">{errors.password}</span>
      </label>
    </Form>
  )
}

export default Register
