import React from 'react';
import Promo from '../Main/Promo/Promo';
import NavTab from '../Main/NavTab/NavTab';
import Techs from '../Main/Techs/Techs';
import AboutMe from '../Main/AboutMe/AboutMe';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { commonLinks, personalLinks } from '../constants/links';

export default function Main ({ isLoggedIn }) {

  return (
    <>
      <Header isLogScreen={false} isLoggedIn={isLoggedIn} />
      <main className='main'>
        <Promo />
        <NavTab />
        <Techs />
        <AboutMe personalLinks={personalLinks} />
      </main>
      <Footer links={commonLinks} />
    </>
  );
};