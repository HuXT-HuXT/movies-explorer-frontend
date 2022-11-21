import React from 'react';
import { useHistory } from "react-router-dom";
import CurrentUserContext from '../contexts/CurrentUserContext';
import './Profile.css';
import Header from '../Header/Header';

export default function Profile ({ handleUserUpdate, handleLogout, isLoggedIn }) {

  const history = useHistory();

  const currentUser = React.useContext(CurrentUserContext);

  const [ userName, setUserName ] = React.useState('');
  const [ userEmail, setUserEmail ] = React.useState('');

  React.useEffect(() => {
    setUserName(currentUser.name);
    setUserEmail(currentUser.email);
    history.push('/account');
  }, []);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  }

  const handleUserEmail = (e) => {
    setUserEmail(e.target.value)
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
      <input type='submit' className='profile__button profile__button_submit' value='Редактировать' />
      <button className='profile__button profile__button_exit' onClick={handleLogout}>Выйти из аккаунта</button>
    </form>
    </>
  );
};