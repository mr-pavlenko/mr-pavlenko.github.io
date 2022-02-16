import React from 'react';
import './StyledLine.scss';

const StyledLine = () => {
  return (
    <svg
      width="243"
      height="211"
      viewBox="0 0 243 211"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="239" cy="207" r="4" fill="#CA359F" />
      <path
        className="path-line"
        d="M1 0V103.5C1 112.337 8.16345 119.5 17 119.5H223C231.837 119.5 239 126.663 239 135.5V207"
        stroke="#CA359F"
        strokeWidth="2"
      />
    </svg>
  );
};

export default StyledLine;
