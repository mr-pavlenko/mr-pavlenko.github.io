import React from 'react';
import './DataOwnerShipBlock.scss';
import * as constants from './constants';
import StyledLine from './components/StyledLine';

const DataOwnerShipBlock = () => {
  return (
    <div className="data-ownership__background">
      <div className="data-ownership__title-block">
        <div className="data-ownership__title">{constants.TITLE}</div>
        <div className="data-ownership__subtitle">{constants.SUBTITLE}</div>
      </div>
      <div className="data-ownership__info-block">
        <div className="data-ownership__info-first">
          <div className="data-ownership__info-title">{constants.FIRST_TITLE}</div>
          <div className="data-ownership__info-description">{constants.DESCRIPTION_1}</div>
          <div className="data-ownership__line-img-up" data-aos="example-anim">
            <StyledLine />
          </div>
        </div>
        <div className="data-ownership__info-second">
          <div className="data-ownership__line-img-down">
            <div data-aos="example-anim" className="data-ownership__img-down">
              <StyledLine />
            </div>
          </div>
          <div className="data-ownership__info-title">{constants.SECOND_TITLE}</div>
          <div className="data-ownership__info-description">{constants.DESCRIPTION_2}</div>
        </div>
        <div className="data-ownership__info-third">
          <div className="data-ownership__info-title">{constants.THIRD_TITLE}</div>
          <div className="data-ownership__info-description">{constants.DESCRIPTION_3}</div>
          <div className="data-ownership__line-img-up" data-aos="example-anim">
            <StyledLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataOwnerShipBlock;
