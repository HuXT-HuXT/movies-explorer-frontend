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
    if (localStorage.getItem('shortInSavedFilmsOn') === 'true') {
      setShortActive(true);
    } else {
      setShortActive(false);
    }
  }, [])

  React.useEffect(() => {
    storeSettings();
  }, [isShortActive])

  const handleShortie = () => {
    setShortActive(!isShortActive);
    storeSettings();
  }

  const storeSettings = () => {
    localStorage.setItem('shortInSavedFilmsOn', isShortActive);
  }

  const savedPhrase = localStorage.getItem('filterSavedPhrase') ? localStorage.getItem('filterSavedPhrase') : '';

  return (
    <>
      <Header isLogScreen={false} isLoggedIn={isLoggedIn} />
      <main className='saved-movies'>
        <SearchLine
          errorMessage={filteredSavedError}
          filterPhrase = {savedPhrase}
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