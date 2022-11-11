import React from 'react';
import './SavedMovies.css';
import SearchLine from '../Common/SearchLine';
import GridContainer from '../Common/GridContainer/GridContainer';
import MoreButton from '../Common/MoreButton/MoreButton';
import Preloader from '../Common/Preloader/Preloader';

export default function SavedMovies ({ savedFilms, handleLike, isLoading }) {

  return (
    <section className='saved-movies'>
      <SearchLine />
      <GridContainer movies={savedFilms} buttonClass='movie__save-picture_remove' handleLike={handleLike} />
      <MoreButton switcher={false}/>
      <Preloader isLoading={isLoading} />
    </section>
  );
};