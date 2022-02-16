import React from 'react';
import './DataOwnerShipBlock.scss';
import stylesLine from '../../../../global/images/dataOwnerShipImg/styled-line.svg';
import * as constants from './constants';

const DataOwnerShipBlock = () => (
  <div className="data-ownership__background">
    <div className="data-ownership__title-block">
      <div className="data-ownership__title">{constants.TITLE}</div>
      <div className="data-ownership__subtitle">{constants.SUBTITLE}</div>
    </div>
    <div className="data-ownership__info-block">
      <div className="data-ownership__info-first">
        <div className="data-ownership__info-title">{constants.FIRST_TITLE}</div>
        <div className="data-ownership__info-description">{constants.DESCRIPTION_1}</div>
        <div className="data-ownership__line-img-up">
          <img src={stylesLine} alt={stylesLine} />
        </div>
      </div>
      <div className="data-ownership__info-second">
        <div className="data-ownership__line-img-down">
          <img src={stylesLine} alt={stylesLine} />
        </div>
        <div className="data-ownership__info-title">{constants.SECOND_TITLE}</div>
        <div className="data-ownership__info-description">{constants.DESCRIPTION_2}</div>
      </div>
      <div className="data-ownership__info-third">
        <div className="data-ownership__info-title">{constants.THIRD_TITLE}</div>
        <div className="data-ownership__info-description">{constants.DESCRIPTION_3}</div>
        <div className="data-ownership__line-img-up">
          <img src={stylesLine} alt={stylesLine} />
        </div>
      </div>
    </div>
  </div>
);

export default DataOwnerShipBlock;
