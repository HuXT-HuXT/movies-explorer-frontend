import React from 'react';
import './MoreButton.css';

export default function MoreButton ({ switcher }) {
  return (
    <div className='more'>
      <button className={switcher ? 'more__button' : ' more__button more__button_hidden'}>Ещё</button>
    </div>
  );
};