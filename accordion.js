import React, { useState } from 'react';

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={item.title} className="accordion-item">
          <div className="accordion-header" onClick={() => handleClick(index)}>
            <h3>{item.title}</h3>
            <div className="accordion-icon">
              {activeIndex === index ? <span>&#8722;</span> : <span>&#43;</span>}
            </div>
          </div>
          {activeIndex === index && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
