import React, { useState } from 'react';

import './Select.scss';
import SelectOption from './SelectOption';


const Select = ({
  name,
  children,
  onChange,
  placeholder,
  optsMaxHeight,
  value: currValue
}) => {
  const [selectValue, setSelectValue] =  useState(null);
  const [open, setOpen] = useState(false);

  // using for animate arrow for open and close
  const toggleIconClasses = ["icon", "arrow"];
  const optionsClasses = ["options"];
  if(open) {
    toggleIconClasses.push("open");
    optionsClasses.push("open");
  }

  // using for animate dropdown menu
  const optionsStyles = { top: '25px', maxHeight: '0px' };
  if(open) {
    optionsStyles.top = '37px';
    optionsStyles.maxHeight = `${optsMaxHeight}px`;
  } 

  const toggleSelect = (e) => {
    e.stopPropagation();
    setOpen(prev => !prev);
  }

  const optionsContent = children.map((option, i) => {
    const { value, label, icon } = option.props;
    return (
      <SelectOption 
        key             = {i}
        name            = {name}
        icon            = {icon}
        value           = {value}
        label           = {label}
        onChange        = {onChange}
        currValue       = {currValue}
        setSelectValue  = {setSelectValue}
      />
    );
  });
 
  return (
    <section className="select" onClick={toggleSelect}>
      <div className="value">
        {selectValue ? selectValue : placeholder} 
      </div>
  
      <span className={toggleIconClasses.join(' ')}>
        <i className='fas fa-chevron-down' />
      </span>

      <div style={optionsStyles} className={optionsClasses.join(' ')}>
        {optionsContent}
      </div>
    </section>
  );
}

export default Select;
