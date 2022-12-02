import React from 'react';
import { useLocation } from 'react-router-dom';
import './MovieCard.css';

export default function MovieCard ({ movie, buttonClass, handleLike, arrayOfNames }) {

  const location = useLocation();
  const currentPath = location.pathname === '/saved-movies';

  function handleClick() {
    handleLike(movie);
  }

  return (
    <>
      <div className='movie__info'>
        <div className='movie__description'>
          <p className='movie__name'>{movie.nameRU}</p>
          <p className='movie__duration'>{new Date(movie.duration * 60 * 1000).toISOString().substr(11, 8).slice(0, -3)}</p>
        </div>
        <button className='movie__save' onClick={handleClick}>
          {currentPath && <div className={`movie__save-picture ${buttonClass}`}></div>}
          {!currentPath && <div className={arrayOfNames.includes(movie.nameRU) ? `movie__save-picture ${buttonClass}` : 'movie__save-picture'} ></div>}
        </button>
      </div>
      <a href={movie.trailerLink} rel="noopener noreferrer" target='_blank' className='movie__poster-place'>
        <div className='movie__poster' style={{ backgroundImage: movie.image.url ? `url(https://api.nomoreparties.co/${movie.image.url})`: `url(${movie.image})` }} ></div>
      </a>
    </>
  );
};