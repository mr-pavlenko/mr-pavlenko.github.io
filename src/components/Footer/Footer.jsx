import React from 'react';
import './Footer.scss';
import logo from '../../global/images/footerImg/dataverse-logo 1.svg';
import * as constants from './constants';

const Footer = () => {
  const addresses = [constants.CITY, constants.ADDRESS, constants.NUMBER];
  const links = [
    {
      link: 'https://google.com',
      text: constants.FACEBOOK,
      key: constants.FACEBOOK,
    },
    {
      link: 'https://google.com',
      text: constants.INSTAGRAM,
      key: constants.INSTAGRAM,
    },
    {
      link: 'https://google.com',
      text: constants.LINKEDIN,
      key: constants.LINKEDIN,
    },
    {
      link: 'https://twitter.com/geodatablock?s=21',
      text: constants.TWITTER,
      key: constants.TWITTER,
    },
  ];

  const handleClick = (link) => {
    window.open(`${link}`);
  };

  return (
    <div className="footer__background">
      <div className="footer__container">
        <div>
          <div className="footer__addresses">
            {addresses.map((item) => (
              <div className="footer__address" key={item}>
                {item}
              </div>
            ))}
          </div>
          <div className="footer__links">
            {links.map((item) => (
              // eslint-disable-next-line
              /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
              <div className="footer__link" onClick={() => handleClick(item.link)} key={item.key}>
                {item.text}
              </div>
            ))}
          </div>
        </div>
        <div className="footer__logo">
          <img src={logo} alt={logo} />
        </div>
      </div>
      <div className="footer__dataverse2022">{constants.DATAVERSE_2022}</div>
    </div>
  );
};

export default Footer;
