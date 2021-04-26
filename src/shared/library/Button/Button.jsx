import React from 'react';

import './Button.scss';
import Spinner from '../Spinner/Spinner';


const Button = ({
  type,
  size,
  loading,
  disabled,
  callback,
  children,
 }) => {
  let mainClasses = ['button'];

  if(type) {
    mainClasses.push(type);
  }

  if(size) {
    mainClasses.push(size);
  }

  if(disabled) {
    mainClasses.push('disabled');
  } else {
    mainClasses = mainClasses.filter(x => x !== 'disabled');
  }

  return (
    <button
      onClick    = {callback}
      disabled   = {disabled}
      className  = {mainClasses.join(' ')}
    >
      {loading ? <Spinner btnSpinner /> : children}
    </button>
  );
}

export default Button;
