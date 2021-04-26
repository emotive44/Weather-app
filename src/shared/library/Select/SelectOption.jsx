import React from 'react';

import './SelectOption.scss';
import useAnimateItem from '../../hooks/useAnimateItem';


const SelectOption = ({ 
  icon, 
  name,
  value,
  label, 
  onChange,
  currValue,
  setSelectValue,
}) => {
  const { ref, animateClass } = useAnimateItem();

  // row in dropdown menu
  const content = (
    <div className="option-content">
      {icon && icon}
      <p> {label} </p>
    </div>
  );

  const checked = currValue === value;

  const optionClasses = ["option", animateClass];
  if(checked) {
    optionClasses.push("option-checked");
  }

  const clickHendler = () => {
    onChange(value, name);
    setSelectValue(content);
  }

  return (
    <div ref={ref} className={optionClasses.join(' ')} onClick={clickHendler} >
      {content}
      {checked && (
        <span className={"checked-arrow"}>
          <i className='fas fa-check' />
        </span>
      )}
    </div>
  );
}

export default SelectOption;
