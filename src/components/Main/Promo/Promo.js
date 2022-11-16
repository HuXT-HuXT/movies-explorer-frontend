import React from 'react';
import './Promo.css';
import SmallButton from '../../Common/SmallButton';

export default function Promo () {

  return (
    <section className='promo'>
      <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
      <div className='promo__menu'>
        <SmallButton link='#navtab' value='О проекте' />
        <SmallButton link='#techs' value='Технологии' />
        <SmallButton link='#aboutme' value='Студент' />
      </div>
    </section>
  );
};