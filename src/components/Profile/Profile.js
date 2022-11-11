import React from 'react';
import './Profile.css';

export default function Profile ({ user, email }) {

  const [userName, setUserName] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');

  React.useEffect(() => {
    setUserName(user);
    setUserEmail(email);
  }, []);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  }

  const handleUserEmail = (e) => {
    setUserEmail(e.target.value)
  }

  return (
    <form className='profile'>
      <h4 className='profile__title'>{`Привет, ${user}!`}</h4>
      <div className='profile__form-line profile__form-line_underline'>
        <span className='profile__input_name'>Имя</span>
        <input type='text' className='profile__input' name='userName' value={user || ''} onChange={handleNameChange} minLength="2" maxLength="40" />
      </div>
      <div className='profile__form-line'>
        <span className='profile__input_name'>Email</span>
        <input type='email' className='profile__input' name='userEmail' value={email || ''} onChange={handleUserEmail} />
      </div>
      <input type='submit' className='profile__button profile__button_submit' value='Редактировать' />
      <button className='profile__button profile__button_exit'>Выйти из аккаунта</button>
    </form>
  );
};