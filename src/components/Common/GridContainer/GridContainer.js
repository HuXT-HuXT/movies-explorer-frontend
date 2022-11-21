import React from 'react';
import './GridContainer.css';
import MovieCard from '../MovieCard/MovieCard';

export default function GridContainer ({ movies, buttonClass, handleLike, arrayOfNames, isShortActive }) {

  const cuttedList = isShortActive ? movies.filter((movie) => movie.duration <=40) : movies

  return (
    <section className='grid-container'>
      {cuttedList.map(movie => {

        return (
          <div key={movie.id || movie.movieId} className='movie'>
            <MovieCard movie={movie} buttonClass={buttonClass} handleLike={handleLike} arrayOfNames={arrayOfNames} />
          </div>
        );
      })
      }
    </section>
  );
};