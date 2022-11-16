import React from 'react';
import './Techs.css';
import SubTitle from '../../Common/Subtitle';
import ListButton from '../../Common/ListButton';

export default function Techs () {

  return (
    <section className='techs' id='techs'>
      <SubTitle subtitle='Технологии' switcher={true} />
      <h1 className='techs__title'>7 технологий</h1>
      <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className='techs__list'>
        <ListButton value='HTML' />
        <ListButton value='CSS' />
        <ListButton value='JS' />
        <ListButton value='React' />
        <ListButton value='GIT' />
        <ListButton value='Express.js' />
        <ListButton value='mongoDB' />
      </ul>
    </section>
  );
};