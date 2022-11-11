import React from 'react';
import './Footer.css';
import LinkBlock from '../Common/LinkBlock';

export default function Footer ({ links }) {

  return (
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__about'>
        <p className='footer__date'>&copy; 2022</p>
        <LinkBlock links={links} />
      </div>
    </footer>
  );
};