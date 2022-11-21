import React from 'react';
import './SearchLine.css';
import zoom from '../../images/zoom.svg';

export default function SearchLine ({ filterMovies, filterPhrase, handleShortie, isShortActive }) {

  const [request, setRequest] = React.useState('');

  React.useEffect(() => {
    setRequest(filterPhrase);
  }, [])

  function handleSearch(e) {
    setRequest(e.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    filterMovies(request);
  }

  const handleToggle = () => {
    handleShortie();
  }

  return (
    <section className='search'>
      <div className='search__line'>
        <form className='search__form'>
          <img src={zoom} alt='Лупа' className='search__zoom'></img>
          <input type='text' className='search__input' placeholder={'Фильм'} required name='search' value={request} onChange={handleSearch} />
          <button type='submit' className='search__submit' onClick={handleSubmit}><div className='search__submit-img'></div></button>
        </form>
        <div className='search__toggle'>
          <div className={`search__checkbox ${isShortActive ? 'search__checkbox_active' : ''}`} onClick={handleToggle} >
            <div className={`search__checkbox-roll ${isShortActive ? 'search__checkbox-roll_active' : ''}`}></div>
          </div>
          <p className='search__toggle-name'>Короткометражки</p>
        </div>
      </div>
      <p className='search__notification'></p>
    </section>
  )
};