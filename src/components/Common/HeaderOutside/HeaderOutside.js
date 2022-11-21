import React from 'react';
import { Link } from "react-router-dom";
import './HeaderOutside.css';

export default function HeaderOutside () {

  return (
    <div className='header__logoffed'>
      <Link to='/sign-up' className='header__guest-menu'>Регистрация</Link>
      <Link to='/sign-in' className='header__guest-menu header__guest-menu_green'>Войти</Link>
    </div>
  );
};