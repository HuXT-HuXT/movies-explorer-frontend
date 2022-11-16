import React from 'react';
import './LinkBlock.css';
import LinkForBlock from './LinkForBlock';

export default function LinkBlock ({ links }) {

  return (
    <div className='link-block'>
      {links.map(link => {
        return (
          <LinkForBlock key={link.id} link={link.link} name={link.name} />
        )
      })
      }
    </div>
  );
};