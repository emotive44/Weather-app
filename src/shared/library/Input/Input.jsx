import React from 'react';
import './Input.scss';


const InputGroup= ({ 
  err, 
  type, 
  value, 
  label,
  name,
  onChange 
}) => {
  const inputClasses = ['input'];

  if(err === 'correct') {
    inputClasses.push('correct');
  }
  return (
    <div className={inputClasses.join(' ')}>
      <label htmlFor={name}>{label}</label>
      <div className='input-wrapper'>
        <input 
          id       = {name} 
          type     = {type} 
          name     = {name} 
          value    = {value} 
          onChange = {onChange} 
        />
        {err === 'correct' && (
          <small><i className="far fa-check-circle"/> Correct</small>
        )}
      </div>
      <span className="input-err">{err === 'correct' ? '' : err}</span>
    </div>
  )
}

export default InputGroup;
