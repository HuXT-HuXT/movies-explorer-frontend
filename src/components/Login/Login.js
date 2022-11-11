import React from 'react';
import './Login.css';
import AuthForm from '../Common/AuthForm/AuthForm';

export default function Login () {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [isEmailValid, setEmailValid] = React.useState(false);
  const [isPasswordValid, setPasswordValid] = React.useState(false);

  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const handleEmailValidity = (e) => {
    if (!e.target.validity.valid) {
      setEmailError(e.target.validationMessage);
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

  return (
      <AuthForm title='Рады видеть!' button='Войти' footerText='Ещё не зарегистрированы?' footerLink='Регистрация' >
        <p className='login__name'>E-mail</p>
        <input type='email' className={`login__input ${!isEmailValid ? 'login__input_error' : ''}`} required value={email} onChange={handleEmailChange} />
        <span className='login__error'>{emailError}</span>
        <p className='login__name'>Пароль</p>
        <input type='password' className={`login__input ${!isPasswordValid ? 'login__input_error' : ''}`} required minLength='5' maxLength='30' value={password} onChange={handlePasswordChange} />
        <span className='login__error'>{passwordError}</span>
      </AuthForm>
  );
};