import React from 'react';
import './PresentationBlock.scss';
import * as constants from './constants';
import logo from '../../../../global/images/presentationImg/logo-dataverse.svg';

const PresentationBlock = () => {
  const links = [
    {
      link: 'https://google.com',
      text: constants.SOCIAL_CHANNELS,
      key: constants.SOCIAL_CHANNELS,
    },
    {
      link: 'https://google.com',
      text: constants.CONTACT_US,
      key: constants.CONTACT_US,
    },
  ];

  const handleClick = (link) => {
    window.open(`${link}`);
  };

  return (
    <div className="presentation__background">
      <div className="presentation__background-grid">
        <div className="presentation__container">
          <div className="presentation__header">
            <div className="presentation__header-logo">
              <img src={logo} alt={logo} />{' '}
            </div>
            <div className="presentation__header-links">
              {links.map((item) => (
                <div
                  className="presentation__header-link"
                  onClick={() => handleClick(item.link)}
                  key={item.key}
                >
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <div className="presentation__grid">
            <div className="presentation__info-block">
              <div className="presentation__title">{constants.TITLE}</div>
              <div className="presentation__description">{constants.DESCRIPTION}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationBlock;
