import React from 'react';
import { Route, Switch } from "react-router-dom";
import './Header.css';
import HeaderInside from '../Common/HeaderInside/HeaderInside';
import HeaderOutside from '../Common/HeaderOutside/HeaderOutside';
import Logo from '../Common/Logo';

export default function Header({ isLogScreen, isLoggedIn }) {

  return (
    <header className={isLogScreen ? 'header_log' : 'header'}>
      <Logo />

      <Switch>

        <Route exact path='/'>
          {isLoggedIn ? <HeaderInside /> : <HeaderOutside />}
        </Route>

        <Route path='/movies'>
          <HeaderInside />
        </Route>

        <Route path='/saved-movies'>
          <HeaderInside />
        </Route>

        <Route path='/account'>
          <HeaderInside />
        </Route>

        <Route path='/sign-in'>
        </Route>

        <Route path='/sign-up'>
        </Route>

      </Switch>

    </header>
  );
};