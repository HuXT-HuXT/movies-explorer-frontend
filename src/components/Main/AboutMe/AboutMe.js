import React from 'react';
import './AboutMe.css';
import SubTitle from '../../Common/Subtitle';
import ArrowLink from '../../Common/ArrowLink';
import LinkForBlock from '../../Common/LinkForBlock';

export default function AboutMe ({ personalLinks }) {

  return (
    <section className='aboutme' id='aboutme'>
      <SubTitle subtitle='Студент' switcher={false} />
      <div className='aboutme__profile'>
        <div className='aboutme__personal'>
          <h2 className='aboutme__name'>Виталя</h2>
          <p className='aboutme__job'>Начинающий фронтер, 40 лет</p>
          <p className='aboutme__about'>Пару слов туда-сюда сделай, Пару слов туда-сюда сделай, Пару слов туда-сюда сделай, Пару слов туда-сюда сделай</p>
          <div className='aboutme__links'>
            <LinkForBlock link='https://facebook.com' name='Facebook' />
            <LinkForBlock link='https://github.com' name='Github' />
          </div>
        </div>
        <div className='aboutme__photo-container'>
          <div className='aboutme__photo'></div>
        </div>
      </div>
      <p className='aboutme__portfolio'>Портфолио</p>
      <ul className='aboutme__link-list'>
        <ArrowLink link='https://github.com/HuXT-HuXT/how-to-learn' value='Статичный сайт' last={false} />
        <ArrowLink link='https://huxt-huxt.github.io/russian-travel/' value='Адаптивный сайт' last={false} />
        <ArrowLink link='https://huxt.nomoredomains.icu/' value='Одностраничное приложение' last={true} />
      </ul>
    </section>
  );
};