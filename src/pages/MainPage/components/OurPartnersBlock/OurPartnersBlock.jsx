import React from 'react';
import './OurPartnersBlock.scss';
import * as constants from './constants';
import Button from '../../../../components/Button';
import SliderPartners from './components /Slider';

const OurPartnersBlock = () => {
  return (
    <div className="our-partners__container-background">
      <div className="our-partners__header">
        <div className="our-partners__title">{constants.TITLE}</div>
        <div className="our-partners__subtitle">{constants.SUBTITLE}</div>
      </div>
      <div className="our-partners__block-logos">
        <SliderPartners />
      </div>
      <div className="our-partners__info-block">
        <div className="our-partners__title-2">{constants.TITLE_2}</div>
        <div className="our-partners__description">{constants.DESCRIPTION}</div>
        <Button text={constants.BUTTON_TEXT} to="https://discord.gg/Xw7pWBCA7h" />
      </div>
    </div>
  );
};

export default OurPartnersBlock;
