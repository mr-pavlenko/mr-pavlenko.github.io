import React from 'react';
import './GetStarted.scss';

const GetStarted = ({ url, title, firstInfo, secondInfo, additionalBlock }) => {
  return (
    <div className="get-started__container">
      <div className={`get-started__component ${additionalBlock && 'additionalBlock'}`}>
        <div className="get-started__url">{url}</div>
        <div className="get-started__main-block">
          <div className="get-started__main-block-title">{title}</div>
          <div className="get-started__main-block-info">
            <div className="get-started__first_info">{firstInfo}</div>
            <div>{secondInfo}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
