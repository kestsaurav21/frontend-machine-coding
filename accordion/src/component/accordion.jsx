import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {items.length === 0 ? (
        <p>No items available</p>
      ) : (
        <div className="accordion">
          {items.map((item, index) => (
            <div className="accordion-item" key={index}>
              <div
                className="accordion-title"
                onClick={() => handleToggle(index)}
              >
                <h4>{item.title}</h4>

                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>

              {activeIndex === index && (
                <div className="accordion-content">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Accordion;
