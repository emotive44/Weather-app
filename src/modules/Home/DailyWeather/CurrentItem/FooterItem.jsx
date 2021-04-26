import React from 'react';

import './FooterItem.scss';


const FooterItem = ({
  value,
  dimension,
  textColor,
  iconColor,
  iconClass,
}) => {
  return (
    <div className="footer-item">
      <i 
        className={`fas ${iconClass}`}
        style={{color: `${iconColor}`}} 
      />
      <span style={{color: `${textColor ? textColor : 'gray'}`}}>
        {value}
        {dimension && <small>{dimension}</small>}
      </span>
    </div>
  );
}

export default FooterItem;
