import React from 'react';
import './Button.scss';

const Button = ({ text, to }) => {
  const handleClick = () => {
    window.open(to);
  };

  return (
    <div className="button__container" onClick={handleClick}>
      <div className="button__text">{text}</div>
    </div>
  );
};

export default Button;
