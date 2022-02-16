import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import abacusLogo from '../../../../../../global/images/ourPartnersImg/abacuslogo.svg';
import chainLogo from '../../../../../../global/images/ourPartnersImg/chainlogo.svg';
import polygonLogo from '../../../../../../global/images/ourPartnersImg/polygonlogo.svg';
import oceanLogo from '../../../../../../global/images/ourPartnersImg/oceanlogo.svg';
import rateangradeLogo from '../../../../../../global/images/ourPartnersImg/rateandgradelogo.png';
import kweriLogo from '../../../../../../global/images/ourPartnersImg/kwerillogo.png';
import tapmydataLogo from '../../../../../../global/images/ourPartnersImg/tapmydata.svg';
import nisgoLogo from '../../../../../../global/images/ourPartnersImg/nisgologo.png';
import grupoLogo from '../../../../../../global/images/ourPartnersImg/grupologo.png';
import flameLogo from '../../../../../../global/images/ourPartnersImg/flamelogo.png';
import datalyticsLogo from '../../../../../../global/images/ourPartnersImg/datalyticslogo.png';
import './Slider.scss';

const SliderPartners = () => {
  const logos = [
    { key: 'abacusLogo', logo: abacusLogo },
    { key: 'chainLogo', logo: chainLogo },
    { key: 'polygonLogo', logo: polygonLogo },
    { key: 'oceanLogo', logo: oceanLogo },
    { key: 'rateangradeLogo', logo: rateangradeLogo },
    { key: 'kweriLogo', logo: kweriLogo },
    { key: 'tapmydataLogo', logo: tapmydataLogo },
    { key: 'nisgoLogo', logo: nisgoLogo },
    { key: 'grupoLogo', logo: grupoLogo },
    { key: 'flameLogo', logo: flameLogo },
    { key: 'datalyticsLogo', logo: datalyticsLogo },
  ];

  return (
    <div className="slider">
      <InfiniteCarousel
        showSides
        sidesOpacity={0}
        animationDuration={800}
        slidesToScroll={2}
        slidesToShow={5}
      >
        {logos.map((item) => (
          <div className="slider__partner-logo" key={item.logo}>
            <img src={item.logo} alt={item.logo} />
          </div>
        ))}
      </InfiniteCarousel>
    </div>
  );
};

export default SliderPartners;
