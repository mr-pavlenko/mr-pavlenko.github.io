import React from 'react';
import './GetStartedBlock.scss';
import GetStarted from './components/GetStarted/GetStarted';
import * as constants from './constants';

const GetStartedBlock = () => {
  return (
    <div className="get-started__main-background">
      <div className="get-started__background">
        <div className="get-started__blocks">
          <div className="get-started__block">
            <div className="get-started__block-one">
              <GetStarted
                url={constants.URL}
                title={constants.TITLE}
                firstInfo={constants.FIRST_INFO}
                secondInfo={constants.SECOND_INFO}
              />
            </div>
            <div className="get-started__block-two ">
              {' '}
              <GetStarted />{' '}
            </div>
            <div className="get-started__block-three">
              {' '}
              <GetStarted />{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedBlock;
