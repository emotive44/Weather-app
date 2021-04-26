import React from 'react';

import './AddMetrics.scss';
import { createStationaryMetrics } from '../services';
import useForm from '../../../shared/hooks/useForm';
import { Button, Input } from '../../../shared/library';


const AddMetrics = ({ closeModal }) => {
  const initialState = {
    rain: '',
    email: '',
    humidity: '',
    username: '',
    pressure: '',
    windSpeed: '',
    temperature: '',
  }
  const { 
    state, 
    errors, 
    setState,
    setErrors,
    inputChangeHandler 
  } = useForm(initialState);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    createStationaryMetrics(state);

    setState(initialState);
    setErrors(initialState);
  }

  return (
    <form onSubmit={onSubmitHandler} className="metrics-form">
      <div className="container"> 
        <Input 
          type     = 'text'
          name     = 'username'
          label    = 'Username'
          value    = {state.username} 
          err      = {errors.username}
          onChange = {inputChangeHandler}
        />

        <Input 
          type     = 'email'
          label    = 'Email'
          name     = 'email'
          value    = {state.email} 
          err      = {errors.email}
          onChange = {inputChangeHandler}
        />

        <Input 
          type     = 'number' 
          name     = 'temperature'
          label    = 'Temperature'
          value    = {state.temperature} 
          err      = {errors.temperature}
          onChange = {inputChangeHandler}
        />

        <Input 
          type     = 'number' 
          name     = 'windSpeed'
          label    = 'Wind speed'
          value    = {state.windSpeed} 
          err      = {errors.windSpeed}
          onChange = {inputChangeHandler}
        />

        <Input 
          type     = 'number' 
          name     = 'humidity'
          label    = 'Humidity'
          value    = {state.humidity} 
          err      = {errors.humidity}
          onChange = {inputChangeHandler}
        />

        <Input 
          type     = 'number' 
          name     = 'pressure'
          label    = 'Pressure'
          value    = {state.pressure} 
          err      = {errors.pressure}
          onChange = {inputChangeHandler}
        />

        <Input 
          type     = 'number' 
          name     = 'rain'
          label    = 'Rain'
          value    = {state.rain} 
          err      = {errors.rain}
          onChange = {inputChangeHandler}
        />
      </div>

      <div className="add-metrics">
        <Button 
          size      = "small"
          type      = "primary"
          callback  = {closeModal}
          disabled  = {Object.values(state).includes('')}
        >
          Add Metrics
        </Button>
      </div>
    </form>
  );
}

export default AddMetrics;
