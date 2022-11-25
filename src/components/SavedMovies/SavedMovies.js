import React from 'react';
import './SavedMovies.css';
import SearchLine from '../Common/SearchLine';
import GridContainer from '../Common/GridContainer/GridContainer';
import MoreButton from '../Common/MoreButton/MoreButton';
import Preloader from '../Common/Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { allLinks } from '../../constants/constants';

export default function SavedMovies ({ savedFilms, handleLike, isLoading, filteredSavedFilms, filterSavedFilms, isLoggedIn, filteredSavedError }) {

  const [ isShortActive, setShortActive ] = React.useState(false);

  React.useEffect(() => {
    setShortActive(JSON.parse(localStorage.getItem('shortInSavedFilmsOn')));
  }, [])

  React.useEffect(() => {
    storeSettings();
  }, [isShortActive])

  const handleShortie = () => {
    setShortActive(!isShortActive);
    storeSettings();
  }

  const storeSettings = () => {
    localStorage.setItem('shortInSavedFilmsOn', JSON.stringify(isShortActive));
  }

  return (
    <>
      <Header isLogScreen={false} isLoggedIn={isLoggedIn} />
      <main className='saved-movies'>
        <SearchLine
          errorMessage={filteredSavedError}
          filterPhrase = {''}
          filterMovies={filterSavedFilms}
          handleShortie={handleShortie}
          isShortActive={isShortActive} />
        <GridContainer
          movies={filteredSavedFilms.length === 0 ? savedFilms : filteredSavedFilms}
          buttonClass='movie__save-picture_remove'
          handleLike={handleLike}
          isShortActive={isShortActive} />
        <MoreButton switcher={false}/>
        <Preloader isLoading={isLoading} />
      </main>
      <Footer links={allLinks} />
    </>
  );
};