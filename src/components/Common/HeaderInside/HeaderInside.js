import React from 'react';
import { Link } from "react-router-dom";
import './HeaderInside.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function HeaderInside () {

  return (
    <>
    <div className='header__logined'>
      <div className='header__movie-menu'>
        <Link to='/movies' className='header__movie header__movie_bold'>Фильмы</Link>
        <Link to='/saved-movies' className='header__movie'>Сохранённые фильмы</Link>
      </div>
      <Link to='/account' className='header__account'>Аккаунт</Link>
    </div>
    <BurgerMenu />
    </>
  );
};
