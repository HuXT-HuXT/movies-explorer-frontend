import React from 'react';
import './Movies.css';
import SearchLine from '../Common/SearchLine';
import GridContainer from '../Common/GridContainer/GridContainer';
import MoreButton from '../Common/MoreButton/MoreButton';
import Preloader from '../Common/Preloader/Preloader';

export default function Movies ({ movies, handleLike, isLoading }) {

  return (
    <main className='movies'>
      <SearchLine />
      <GridContainer movies={movies} buttonClass='movie__save-picture_active'  handleLike={handleLike} />
      <MoreButton switcher={true}/>
      <Preloader isLoading={isLoading} />
    </main>
  );
};