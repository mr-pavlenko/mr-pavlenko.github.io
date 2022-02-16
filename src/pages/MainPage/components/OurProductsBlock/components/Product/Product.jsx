import React from 'react';
import './Product.scss';

const Product = ({ logo, info, thirdLogoClassName, thirdInfoClassName }) => {
  return (
    <div className="product__container">
      <div className={`product__logo ${thirdLogoClassName}`}>
        {' '}
        <img src={logo} alt={logo} />
      </div>
      <div className={`product__info ${thirdInfoClassName}`}>{info}</div>
    </div>
  );
};

export default Product;
