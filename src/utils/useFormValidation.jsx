import {useCallback, useState} from "react";

export default function useFormValidation() {
    // Состояние для хранения значений полей формы
    const [values, setValues] = useState({});
    // Состояние для хранения сообщений об ошибках для полей формы
    const [errors, setErrors] = useState({});
    // Состояние для хранения информации о валидности всей формы
    const [isValid, setIsValid] = useState(false);

    const handleEdit = useCallback((e) => {
        // Извлекаем имя, значение и сообщение об ошибке из элемента формы
        const name = e.target.name;
        const value = e.target.value;
        const validationMessage = e.target.validationMessage;
        const form = e.target.form;

        // Обновляем состояние values, добавляя новое значение или обновляя существующее
        setValues((originalValue) => {
            return {...originalValue, [name]: value}
        })

        // Обновляем состояние errors, добавляя новое сообщение об ошибке или обновляя существующее
        setErrors(originalErrors => {
            return {...originalErrors, [name]: validationMessage}
        })

        // Обновляем состояние isValid, проверяя валидность всей формы
        setIsValid(form.checkValidity())
    }, [])

    // Функция для установки значения определенного поля формы по имени
    const setValue = useCallback((name, value) => {
        setValues((originalValues) => {
            return {...originalValues, [name]: value}
        })
    }, [])

    // Функция для сброса состояния формы к начальным значениям (или к заданным значениям data)
    const resetForm = useCallback((data = {}) => {
        setValues(data)
        setErrors({})
        setIsValid(false)
    }, [])

    return {values, errors, isValid, setIsValid, handleEdit, setValue, setValues, resetForm}
}