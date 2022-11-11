import React from 'react';
import './Logo.css';
import projectLogo from '../../images/logo.svg';

export default function Logo () {

  return (
    <img src={projectLogo} alt="Лого проекта" className="logo"/>
  );
};
