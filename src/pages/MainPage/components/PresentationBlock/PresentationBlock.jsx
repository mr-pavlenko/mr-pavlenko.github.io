import React from 'react';
import './PresentationBlock.scss';
import * as constants from './constants';
import logo from '../../../../global/images/presentationImg/logo-dataverse.svg';
import telegramLogo from '../../../../global/images/presentationImg/icons8-telegram-app-128.png';
import twitterLogo from '../../../../global/images/presentationImg/icons8-twitter-128.png';
import redditLogo from '../../../../global/images/presentationImg/icons8-reddit-128.png';
import discordLogo from '../../../../global/images/presentationImg/icons8-discord-bubble-128.png';

const PresentationBlock = () => {
  const links = [
    {
      link: 'https://google.com',
      img: redditLogo,
      key: constants.REDDIT,
    },
    {
      link: 'https://t.me/GeoDBgroup',
      img: telegramLogo,
      key: constants.TELEGRAM,
    },
    {
      link: 'https://twitter.com/geodatablock?s=21',
      img: twitterLogo,
      key: constants.TWITTER,
    },
    {
      link: 'https://discord.gg/Xw7pWBCA7h',
      img: discordLogo,
      key: constants.DISCORD,
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
                  {item.text && <div>{item.text}</div>}
                  {item.img && (
                    <img src={item.img} alt={item.key} className="presentation__link-img" />
                  )}
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
