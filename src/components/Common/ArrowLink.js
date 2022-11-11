import React from 'react';
import './ArrowLink.css';

export default function ArrowLink ({ link, value, last }) {

  return (
    <a href={link} className={last ? 'arrowlink arrowlink_last' : 'arrowlink'}>
      <p className='arrowlink__project-description'>{value}</p>
      <p className='arrowlink__project-description arrowlink__arrow'>&#8599;</p>
    </a>
  );
};