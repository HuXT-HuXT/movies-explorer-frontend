import React from 'react';
import { NavLink } from 'react-router-dom';
import './BurgerMenu.css';

export default function BurgerMenu () {
  const [ iActive, setActive ] = React.useState(false);

  const handleClick = () => {
    setActive(!iActive)
  }

  return (
    <div className='burger'>
      <div className='burger__turner' onClick={handleClick}>
        <span className={iActive ? 'burger__span burger__span_clockwise' : 'burger__span'}></span>
        <span className={iActive ? 'burger__span burger__span_hidden' : 'burger__span'}></span>
        <span className={iActive ? 'burger__span burger__span_nonclockwise' : 'burger__span'}></span>
      </div>

      <div className={!iActive ? 'burger__container burger__container_hidden' : 'burger__container'}>
        <div className='burger__menu'>
          <NavLink to='/' className='burger__option'>Главная</NavLink>
          <NavLink to='/movies' activeClassName='burger__option_active' className='burger__option' onClick={handleClick}>Фильмы</NavLink>
          <NavLink to='/saved-movies' activeClassName='burger__option_active' className='burger__option' onClick={handleClick} >Сохранённые фильмы</NavLink>
          <NavLink to='/account' className='burger__account' onClick={handleClick} >Аккаунт</NavLink>
        </div>
        <div className='burger__blur'></div>
      </div>
    </div>
  );
};