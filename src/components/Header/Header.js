import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import './Header.css';
import BurgerMenu from '../Common/BurgerMenu/BurgerMenu';
import Logo from '../Common/Logo';

export default function Header({ isLogScreen }) {

  return (
    <header className={isLogScreen ? 'header_log' : 'header'}>
      <Logo />

      <Switch>

        <Route exact path='/'>
          <div className='header__functions header__functions_guest'>
            <Link to='/sign-up' className='header__guest-menu'>Регистрация</Link>
            <Link to='/sign-in' className='header__guest-menu header__guest-menu_green'>Войти</Link>
          </div>
        </Route>

        <Route path='/movies'>
          <div className='header__functions header__functions_logged'>
            <div className='header__movie-menu'>
              <Link to='/movies' className='header__movie header__movie_bold'>Фильмы</Link>
              <Link to='/saved-movies' className='header__movie'>Сохранённые фильмы</Link>
            </div>
            <Link to='/account' className='header__account'>Аккаунт</Link>
          </div>
          <BurgerMenu />
        </Route>

        <Route path='/saved-movies'>
          <div className='header__functions header__functions_logged'>
            <div className='header__movie-menu'>
              <Link to='/movies' className='header__movie header__movie_bold'>Фильмы</Link>
              <Link to='/saved-movies' className='header__movie'>Сохранённые фильмы</Link>
            </div>
            <Link to='/account' className='header__account'>Аккаунт</Link>
          </div>
          <BurgerMenu />
        </Route>

        <Route path='/account'>
          <div className='header__functions header__functions_logged'>
            <div className='header__movie-menu'>
              <Link to='/movies' className='header__movie header__movie_bold'>Фильмы</Link>
              <Link to='/saved-movies' className='header__movie'>Сохранённые фильмы</Link>
            </div>
            <Link to='/account' className='header__account'>Аккаунт</Link>
          </div>
          <BurgerMenu />
        </Route>

        <Route path='/sign-in'>
        </Route>

        <Route path='/sign-up'>
        </Route>

      </Switch>

    </header>
  );
};