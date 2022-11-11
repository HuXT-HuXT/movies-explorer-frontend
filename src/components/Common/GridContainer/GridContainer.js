import React from 'react';
import './GridContainer.css';
import MovieCard from '../MovieCard/MovieCard';

export default function GridContainer ({ movies, buttonClass, handleLike }) {

  return (
    <section className='grid-container'>
      {movies.map(movie => {
        return (
          <div key={movie._id} className='movie'>
            <MovieCard movie={movie} buttonClass={buttonClass} handleLike={handleLike} />
          </div>
        );
      })
      }
    </section>
  );
};