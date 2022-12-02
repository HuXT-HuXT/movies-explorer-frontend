import React from 'react';
import './MoreButton.css';

export default function MoreButton ({ switcher, handleLimitChange }) {
  return (
    <div className='more'>
      <button className={switcher ? 'more__button' : ' more__button more__button_hidden'} onClick={handleLimitChange}>Ещё</button>
    </div>
  );
};