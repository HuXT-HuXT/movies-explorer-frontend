import React from 'react';
import './Subtitle.css';

export default function SubTitle ({ subtitle, switcher }) {

  return (
    <h4 className={switcher ? 'subtitle subtitle_shorter' : 'subtitle subtitle_taller'}>{subtitle}</h4>
  );
};