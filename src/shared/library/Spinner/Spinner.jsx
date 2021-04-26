import React from 'react';
import './Spinner.scss';


const Spinner = ({
  className,
  btnSpinner
}) => {
  const spinnerClasses = ['spinner'];

  if(btnSpinner) {
    spinnerClasses.push('button-spinner');
  }

  if(className) {
    spinnerClasses.push(className);
  }

  return (
    <div className={spinnerClasses.join(' ')}>
      <img
        src='/spinner.gif'
        alt=''
      />
    </div>
  );
}

export default Spinner;
