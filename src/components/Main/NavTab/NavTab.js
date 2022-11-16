import React from 'react';
import './NavTab.css';
import SubTitle from '../../Common/Subtitle';

export default function NavTab () {

  return (
    <section className='navtab' id='navtab'>
      <SubTitle subtitle='О проекте' switcher={false} />
      <div className='navtab__description'>
        <article className='navtab__about'>
          <h4 className='navtab__about-title'>Дипломный проект включал 5 этапов</h4>
          <p className='navtab__about-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </article>
        <article className='navtab__about'>
          <h4 className='navtab__about-title'>На выполнение диплома ушло 5 недель</h4>
          <p className='navtab__about-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </div>
      <div className='navtab__progress'>
          <p className='navtab__progress-bar navtab__start'>1 неделя</p>
          <p className='navtab__progress-bar navtab__end'>4 недели</p>
        </div>
        <div className='navtab__progress'>
          <p className='navtab__progress-bar navtab__back'>Back-end</p>
          <p className='navtab__progress-bar navtab__front'>Front-end</p>
      </div>
    </section>
  );
};