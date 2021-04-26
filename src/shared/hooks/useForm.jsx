import { useState } from 'react';

import { validate } from '../utils/validators';


const useForm = (initState = {}) => {
  const [state, setState] = useState(initState);
  const [errors, setErrors] = useState(initState);

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;
    
    setErrors(prev => ({
      ...prev,
      [name]: validate(value, name),
    }));

    setState(prev => ({
        ...prev,
        [name] : value,
    }));
  }

  const selectChangeHandler = (value, name) => {
    setErrors(prev => ({
      ...prev,
      [name]: validate(value, name),
    }));

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  return {
    state,
    errors,
    setState,
    setErrors,
    inputChangeHandler,
    selectChangeHandler,
  }
}

export default useForm;
