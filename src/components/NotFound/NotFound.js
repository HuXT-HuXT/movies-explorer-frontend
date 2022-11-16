import React from 'react';
import './NotFound.css';

export default function NotFound ({ goBack }) {
  return (
    <section className='notfound'>
      <p className='notfound__number'>404</p>
      <p className='notfound__text'>Страница не найдена</p>
      <button className='notfound__back' onClick={goBack}>Назад</button>
    </section>
  );
};