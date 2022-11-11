import React from 'react';
import './Register.css';
import AuthForm from '../Common/AuthForm/AuthForm';

export default function Register () {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [isNameValid, setNameValid] = React.useState(false);
  const [isEmailValid, setEmailValid] = React.useState(false);
  const [isPasswordValid, setPasswordValid] = React.useState(false);

  const [nameError, setNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const handleNameValidity = (e) => {
    if (!e.target.validity.valid) {
      setNameError(e.target.validationMessage);
      setNameValid(false);
    } else {
      setNameError('');
      setNameValid(true);
    }
  }

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

  const handleNameChange = (e) => {
    setName(e.target.value);
    handleNameValidity(e)
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    handleEmailValidity(e)
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    handlePasswordValidity(e)
  };

  return (
      <AuthForm title='Добро пожаловать!' button='Зарегистрироваться' footerText='Уже зарегистрированы?' footerLink='Войти' >
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
  );
};