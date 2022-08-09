import React, { useState } from 'react';

const Accordion = ({ title, data1, data2}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-item-header" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{data1}<br></br>{data2}</div>}
    </div>
  );
};

export default Accordion;