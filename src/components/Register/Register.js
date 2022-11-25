import React from 'react';
import './Register.css';
import AuthForm from '../Common/AuthForm/AuthForm';
import Header from '../Header/Header';
import { email_pattern, name_pattern, validationError } from '../../constants/constants';

export default function Register ({ handleRegistration, apiResponse, resetApiError }) {
  const [ name, setName ] = React.useState('');
  const [ email, setEmail ] = React.useState('');
  const [ password, setPassword ] = React.useState('');

  const [ isNameValid, setNameValid ] = React.useState(false);
  const [ isEmailValid, setEmailValid ] = React.useState(false);
  const [ isPasswordValid, setPasswordValid ] = React.useState(false);

  const [ nameError, setNameError ] = React.useState('');
  const [ emailError, setEmailError ] = React.useState('');
  const [ passwordError, setPasswordError ] = React.useState('');

  React.useEffect(() => {
    resetApiError();
  }, []);

  const handleNameValidity = (e) => {
    if (!e.target.validity.valid || !e.target.value.match(name_pattern) ) {
      setNameError(e.target.validationMessage || validationError.name);
      setNameValid(false);
    } else {
      setNameError('');
      setNameValid(true);
    }
  }

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

  const handleNameChange = (e) => {
    setName(e.target.value);
    handleNameValidity(e);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    handleEmailValidity(e);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    handlePasswordValidity(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(name, email, password);
  }

  return (
    <>
      <Header isLogScreen={true} />
      <AuthForm
        handleSubmit={handleSubmit}
        title='Добро пожаловать!'
        button='Зарегистрироваться'
        footerText='Уже зарегистрированы?'
        footerLink='Войти'
        disabled={isEmailValid && isPasswordValid && isNameValid}
        apiResponse={apiResponse} >
        <p className='register__name'>Имя</p>
        <input type='text' className={`register__input ${!isNameValid ? 'register__input_error' : ''}`} required minLength='2' maxLength='30' value={name} onChange={handleNameChange} />
        <span className='register__error'>{nameError}</span>
        <p className='register__name'>E-mail</p>
        <input type='email' className={`register__input ${!isEmailValid ? 'register__input_error' : ''}`} required value={email} onChange={handleEmailChange} />
        <span className='register__error'>{emailError}</span>
        <p className='register__name'>Пароль</p>
        <input type='password' className={`register__input ${!isPasswordValid ? 'register__input_error' : ''}`} required minLength='5' maxLength='30' value={password} onChange={handlePasswordChange} />
        <span className='register__error'>{passwordError}</span>
      </AuthForm>
    </>
  );
};