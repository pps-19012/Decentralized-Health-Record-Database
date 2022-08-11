import React, { useState } from 'react';

const Accordion = ({ title, data1, data2, data3, data4, data5, data6, data7}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-item-header" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{data1}
      <br></br>{data2}
      <br></br>{data3}
      <br></br>{data4}
      <br></br>{data5}
      <br></br>{data6}
      <br></br>{data7}
      </div>}
    </div>
  );
};

export default Accordion;