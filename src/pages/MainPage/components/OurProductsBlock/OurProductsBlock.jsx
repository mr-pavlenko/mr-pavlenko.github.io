import React from 'react';
import './OurProductsBlock.scss';
import Product from './components/Product';
import logoOdin from '../../../../global/images/ourProductsImg/logo-odin.svg';
import logoWorlds from '../../../../global/images/ourProductsImg/logo-worlds.svg';
import logoGeocash from '../../../../global/images/ourProductsImg/logo-geocash.svg';
import logoWallace from '../../../../global/images/ourProductsImg/logo-wallace.svg';
import logoGeoScan from '../../../../global/images/ourProductsImg/logo-geoscan.svg';
import * as constants from './constants';

const OurProductsBlock = () => {
  const productInfo = [
    {
      key: 'logoOdin',
      logo: logoOdin,
      info: constants.ODIN_INFO,
    },
    {
      key: 'logoWorlds',
      logo: logoWorlds,
      info: constants.WORLDS_INFO,
    },
    {
      key: 'logoGeocash',
      logo: logoGeocash,
      info: constants.GEOCASH_INFO,
      thirdLogoClassName: 'thirdLogoClassName',
      thirdInfoClassName: 'thirdInfoClassName',
    },
    {
      key: 'logoWallace',
      logo: logoWallace,
      info: constants.WALLACE_INFO,
    },
    {
      key: 'logoGeoScan',
      logo: logoGeoScan,
      info: constants.GEOSCAN_INFO,
    },
  ];

  return (
    <div className="our-products__container">
      <div className="our-products__white-block">
        {' '}
        <div className="our-products__title">Our Products</div>
      </div>
      <div className="our-products__top-background" />
      <div className="our-products__info_block">
        {productInfo.map((item) => (
          <div className="our-products__info" key={item.key}>
            {item.thirdLogoClassName && item.thirdInfoClassName ? (
              <Product
                info={item.info}
                logo={item.logo}
                thirdLogoClassName={item.thirdLogoClassName}
                thirdInfoClassName={item.thirdInfoClassName}
              />
            ) : (
              <Product info={item.info} logo={item.logo} />
            )}
          </div>
        ))}
      </div>
      <div className="our-products__bottom-background" />
      <div className="our-products__white-block" />
    </div>
  );
};

export default OurProductsBlock;
