import { useState } from "react";
import validator from "validator";

export default function useValidation(isValid) {
  const [isWrong, setIsWrong] = useState(isValid);
  const [errorMessage, setErrorMessage] = useState('');

  function validation(e) {
    if (!e.target.validity.valid) {
      setIsWrong(true);
      setErrorMessage(e.target.validationMessage);
    } else {
      setIsWrong(false);
      setErrorMessage('');
    }
    if (e.target.name === 'email') {
      if (!validator.isEmail(e.target.value)) {
        setIsWrong(true);
        setErrorMessage('Некорректный адрес электронной почты.');
      } else {
        setIsWrong(false);
        setErrorMessage('')
      }
    }
  };

  return {isWrong, errorMessage, setErrorMessage, validation};
};