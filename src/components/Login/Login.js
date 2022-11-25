import React from 'react';
import './Login.css';
import AuthForm from '../Common/AuthForm/AuthForm';
import Header from '../Header/Header';
import { email_pattern, validationError } from '../../constants/constants';

export default function Login ({ handleLogin, apiResponse }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [isEmailValid, setEmailValid] = React.useState(false);
  const [isPasswordValid, setPasswordValid] = React.useState(false);

  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const [ errorHandler, setErrorHandler ] = React.useState('');

  React.useEffect(() => {
    setErrorHandler('')
  }, [])

  const handleEmailValidity = (e) => {
    if (!e.target.validity.valid || !e.target.value.match(email_pattern)) {
      setEmailError(e.target.validationMessage || validationError.email);
      setEmailValid(false);
    } else {
      setEmailError('');
      setEmailValid(true);
    }
  }

  const handlePasswordValidity = (e) => {
    if (!e.target.validity.valid) {
      setPasswordError(e.target.validationMessage);
      setPasswordValid(false);
    } else {
      setPasswordError('');
      setPasswordValid(true);
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    handleEmailValidity(e)
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    handlePasswordValidity(e)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setErrorHandler(apiResponse);
  }

  return (
    <>
      <Header isLogScreen={true} />
      <AuthForm
        handleSubmit={handleSubmit}
        title='Рады видеть!'
        button='Войти'
        footerText='Ещё не зарегистрированы?'
        footerLink='Регистрация'
        disabled={isEmailValid && isPasswordValid}
        apiResponse={errorHandler} >
        <p className='login__name'>E-mail</p>
        <input type='email' className={`login__input ${!isEmailValid ? 'login__input_error' : ''}`} required value={email} onChange={handleEmailChange} />
        <span className='login__error'>{emailError}</span>
        <p className='login__name'>Пароль</p>
        <input type='password' className={`login__input ${!isPasswordValid ? 'login__input_error' : ''}`} required minLength='5' maxLength='30' value={password} onChange={handlePasswordChange} />
        <span className='login__error'>{passwordError}</span>
        <p className='login__api-error'></p>
      </AuthForm>
    </>
  );
};