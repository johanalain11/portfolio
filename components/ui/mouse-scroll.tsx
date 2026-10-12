import React from 'react';
import './mouse-scroll.css'

function MouseScroll() {
  return (
    <div className="mouse-scroll">
      <div className="mouse">
        <div className="wheel"></div>
      </div>
      {/* <div className="arrow-scroll">
        <span>&#8595;</span>
      </div> */}
    </div>
  );
}

export default MouseScroll;
