import React from 'react';
import './ArrowLink.css';

export default function ArrowLink ({ link, value, last }) {

  return (
    <li className={last ? 'arrowlink arrowlink_last' : 'arrowlink'}>
      <a href={link} rel="noopener noreferrer" target='_blank' className='arrowlink__link'>
        <p className='arrowlink__project-description'>{value}</p>
        <p className='arrowlink__project-description arrowlink__arrow'>&#8599;</p>
      </a>
    </li>
  );
};