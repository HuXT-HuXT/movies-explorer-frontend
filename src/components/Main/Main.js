import React from 'react';
import Promo from '../Main/Promo/Promo';
import NavTab from '../Main/NavTab/NavTab';
import Techs from '../Main/Techs/Techs';
import AboutMe from '../Main/AboutMe/AboutMe';

export default function Main ({ personalLinks }) {

  return (
    <main className='main'>
      <Promo />
      <NavTab />
      <Techs />
      <AboutMe personalLinks={personalLinks} />
    </main>
  );
};