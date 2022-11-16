import React from 'react';
import './ListButton.css';

export default function ListButton ({ value }) {
  return (
    <li className='list-button'>{value}</li>
  );
};