import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import './AuthForm.css';

export default function AuthForm ({ title, children, button, footerText, footerLink }) {
  return (
    <form className='auth-form'>
      <h4 className='auth-form__title'>{title}</h4>
      {children}
      <input type='submit' className='auth-form__submit' value={button}></input>

      <Switch>
        <Route path='/sign-in'>
          <p className='auth-form__footer'>{footerText} <Link to='/sign-up' className='auth-form__footer_link' >{footerLink}</Link></p>
        </Route>

        <Route path='/sign-up'>
          <p className='auth-form__footer'>{footerText} <Link to='/sign-in' className='auth-form__footer_link' >{footerLink}</Link></p>
        </Route>
      </Switch>
    </form>
  );
};