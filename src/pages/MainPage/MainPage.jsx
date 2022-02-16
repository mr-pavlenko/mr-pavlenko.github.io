import React from 'react';
import GetStartedBlock from './components/GetStartedBlock';
import DataOwnerShipBlock from './components/DataOwnerShipBlock';
import OurProductsBlock from './components/OurProductsBlock';
import OurPartnersBlock from './components/OurPartnersBlock';
import IntroducePeopleBlock from './components/IntroducePeopleBlock';
import Footer from '../../components/Footer/Footer';
import PresentationBlock from './components/PresentationBlock';

const MainPage = () => {
  return (
    // eslint-disable-next-line
    <>
      <PresentationBlock />
      <GetStartedBlock />
      <DataOwnerShipBlock />
      <OurProductsBlock />
      <OurPartnersBlock />
      <IntroducePeopleBlock />
      <Footer />
    </>
  );
};

export default MainPage;
