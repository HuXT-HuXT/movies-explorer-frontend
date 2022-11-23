import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import './Profile.css';
import Header from '../Header/Header';
import { email_pattern, name_pattern, validationError } from '../../constants/constants';

export default function Profile ({ handleUserUpdate, handleLogout, isLoggedIn }) {

  const currentUser = React.useContext(CurrentUserContext);

  const [ userName, setUserName ] = React.useState('');
  const [ userEmail, setUserEmail ] = React.useState('');

  const [isNameValid, setNameValid] = React.useState(false);
  const [isEmailValid, setEmailValid] = React.useState(false);

  const [nameError, setNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

  React.useEffect(() => {
    setUserName(currentUser.name);
    setUserEmail(currentUser.email);
    setNameError('');
    setEmailError('');
  }, [currentUser]);

  const handleNameValidity = (e) => {
    if (!e.target.validity.valid || !e.target.value.match(name_pattern) ) {
      setNameError(e.target.validationMessage || validationError.name);
      setNameValid(false);
    } else {
      setNameError('');
      setNameValid(true);
    }
  }

  const handleNameChange = (e) => {
    setUserName(e.target.value);
    handleNameValidity(e);
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

  const handleUserEmail = (e) => {
    setUserEmail(e.target.value)
    handleEmailValidity(e);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserUpdate(userName, userEmail);
  }

  return (
    <>
    <Header isLogScreen={false} isLoggedIn={isLoggedIn} />
    <form className='profile' onSubmit={handleSubmit}>
      <h4 className='profile__title'>{`Привет, ${currentUser.name}!`}</h4>
      <div className='profile__form-line profile__form-line_underline'>
        <span className='profile__input_name'>Имя</span>
        <input type='text' className='profile__input' name='userName' value={userName || ''} onChange={handleNameChange} minLength="2" maxLength="40" />
      </div>
      <div className='profile__form-line'>
        <span className='profile__input_name'>Email</span>
        <input type='email' className='profile__input' name='userEmail' value={userEmail || ''} onChange={handleUserEmail} />
      </div>
      <p className='profile__error-on-update'>{!isNameValid || !isEmailValid ? `${nameError} ${emailError}` : ''}</p>
      <input type='submit' className='profile__button profile__button_submit' value='Редактировать' disabled={!isNameValid && !isEmailValid} />
      <button className='profile__button profile__button_exit' onClick={handleLogout}>Выйти из аккаунта</button>
    </form>
    </>
  );
};