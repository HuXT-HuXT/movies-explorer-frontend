import React from 'react';
import './SmallButton.css';

export default function SmallButton ({ link, value }) {

  return (
    <a href={link} className='small-button'>{value}</a>
  );
};