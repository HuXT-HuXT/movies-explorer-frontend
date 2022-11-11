import React from 'react';
import './SearchLine.css';
import zoom from '../../images/zoom.svg';

export default function SearchLine () {

  const [request, setRequest] = React.useState('');

  const [active, setActive] = React.useState(false);

  function handleSearch(e) {
    setRequest(e.target.value)
  }

  function switchToggle() {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  }

  return (
    <section className='search'>
      <div className='search__line'>
        <form className='search__form'>
          <img src={zoom} alt='Лупа' className='search__zoom'></img>
          <input type='text' className='search__input' placeholder='Фильм' required name='search' value={request} onChange={handleSearch} ></input>
          <button type='submit' className='search__submit' ><div className='search__submit-img' ></div></button>
        </form>
        <div className='search__toggle'>
          <div className={`search__checkbox ${active ? 'search__checkbox_active' : ''}`} onClick={switchToggle}>
            <div className={`search__checkbox-roll ${active ? 'search__checkbox-roll_active' : ''}`}></div>
          </div>
          <p className='search__toggle-name'>Короткометражки</p>
        </div>
      </div>
    </section>
  )
};