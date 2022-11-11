import React from 'react';
import './MovieCard.css';

export default function MovieCard ({ movie, buttonClass, handleLike }) {

  function handleClick() {
    handleLike(movie);
  }

  return (
    <>
      <div className='movie__info'>
        <div className='movie__description'>
          <p className='movie__name'>{movie.name}</p>
          <p className='movie__duration'>{movie.duration}</p>
        </div>
        <button className='movie__save' onClick={handleClick}>
          <div className={movie.likes ? `movie__save-picture ${buttonClass}` : 'movie__save-picture' }></div>
        </button>
      </div>
      <div className='movie__poster-place'>
        <div className='movie__poster' style={{ backgroundImage: `url(${movie.link})` }} ></div>
      </div>
    </>
  );
};