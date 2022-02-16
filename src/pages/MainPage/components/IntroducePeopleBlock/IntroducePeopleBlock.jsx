import React from 'react';
import './IntroducePeopleBlock.scss';
import Button from '../../../../components/Button';
import * as constants from './constants';

const IntroducePeopleBlock = () => (
  <div className="introduce-people__background">
    <div className="introduce-people__container">
      <div className="introduce-people__info-block">
        <div className="introduce-people__title">{constants.TITLE}</div>
        <Button text={constants.BUTTON_TEXT} to="https://t.me/GeoDBgroup" />
      </div>
    </div>
  </div>
);

export default IntroducePeopleBlock;
