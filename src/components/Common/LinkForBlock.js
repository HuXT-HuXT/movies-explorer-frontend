import React from 'react';
import './LinkForBlock.css';

export default function LinkForBlock ({ link, name }) {

  return (
    <a href={link} className='link'>{name}</a>
  );
};