import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import './AuthForm.css';
import ApiError from '../ApiError/ApiError';

export default function AuthForm ({ handleSubmit, title, children, button, footerText, footerLink, disabled, apiResponse }) {

  return (
    <form className='auth-form' action='#' onSubmit={handleSubmit}>
      <h4 className='auth-form__title'>{title}</h4>
      {children}
      <ApiError apiResponse={apiResponse} />
      <input type='submit' className={!disabled ? 'auth-form__submit_disabled auth-form__submit' : 'auth-form__submit'} value={button} disabled={!disabled} />

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