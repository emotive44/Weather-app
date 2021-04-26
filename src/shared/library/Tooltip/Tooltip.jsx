import React from 'react';
import './Tooltip.scss';


const Tooltip = ({
  position,
  content,
  children
}) => {
  const mainClasses = ['tooltip', position];

  return (
    <div className={mainClasses.join(' ')}>
      <div className='children'>
        {children}
        <span className='content'>
          {content}
        </span>
      </div>
    </div>
  );
};

export default Tooltip;
