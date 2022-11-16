import React from 'react';
import { Link } from "react-router-dom";
import './Logo.css';
import projectLogo from '../../images/logo.svg';

export default function Logo () {

  return (
    <Link to='/' className='logo'>
      <img src={projectLogo} alt="Лого проекта" className="logo__image"/>
    </Link>
  );
};
