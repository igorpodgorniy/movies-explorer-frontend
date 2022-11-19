import { useState } from 'react';

export default function useForm(inputValues) {
  const [values, setValues] = useState(inputValues);

  function handleChange(e) {
    if (e.target.name === 'checkbox') {
      const { checked, name } = e.target;
      setValues({...values, [name]: checked});
    } else {
      const {value, name} = e.target;
      setValues({...values, [name]: value});
    }
  };
  return {values, handleChange, setValues};
}