import { useState, useCallback } from "react";

//Hook useForm для управления состоянием формы
const useForm = () => {
  //Состояние для хранения введенных значений полей формы.
  const [enteredValues, setEnteredInputValues] = useState({});
  //Состояние для хранения ошибок валидации полей формы.
  const [errors, setErrors] = useState({});
  //Состояние, указывающее на валидность всей формы.
  const [isFormValid, setIsFormValid] = useState(false);

  //Обработчик изменений полей формы. Обновляет состояния
  // введенных значений, ошибок валидации и валидности формы.
  const handleChangeInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // Обновляем состояние введенных значений
    setEnteredInputValues({
      ...enteredValues,
      [name]: value,
    });

    // Обновляем состояние ошибок валидации
    setErrors({
      ...errors,
      [name]: event.target.validationMessage,
    });

    // Обновляем состояние валидности формы
    setIsFormValid(event.target.closest("#form").checkValidity());
  };

  //Функция для сброса формы. Устанавливает новые значения состояний формы, переданные в аргументах.
  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsFormValid = false) => {
      // Устанавливаем новые значения состояний формы
      setEnteredInputValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsFormValid);
    },
    [setEnteredInputValues, setErrors, setIsFormValid]
  );
  // Возвращаем состояния и функции для управления формой
  return {
    enteredValues,
    handleChangeInput,
    isFormValid,
    errors,
    resetForm,
  };
};

export default useForm;
