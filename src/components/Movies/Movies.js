import React from 'react';
import './Movies.css';
import SearchLine from '../Common/SearchLine';
import GridContainer from '../Common/GridContainer/GridContainer';
import MoreButton from '../Common/MoreButton/MoreButton';
import Preloader from '../Common/Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { allLinks } from '../../constants/constants';

export default function Movies ({ arrayOfNames, movies, handleLike, isLoading, filterMovies, isLoggedIn, allMoviesSearchError }) {

  const [ limit, setLimit ] = React.useState(0);
  const [ limitStep, setLimitStep ] = React.useState(0);
  const [ buttonControl, setButtonControl ] = React.useState(false);
  const [ isShortActive, setShortActive ] = React.useState(false);
  const [ screenWidth, setScreenWidth ] = React.useState('');

  const changeLimits = () => {
    if (window.innerWidth >= 1160) {
      setLimit(12);
      setLimitStep(3);
    }
    if (window.innerWidth <= 1160 && window.innerWidth >=481) {
      setLimit(8);
      setLimitStep(2);
    }
    if (window.innerWidth <= 480) {
      setLimit(5);
      setLimitStep(2);
    }
  }

  function checkWidth () {
    setScreenWidth(window.innerWidth);
    changeLimits();
  }

  const checkLimit = () => {
    if (movies.length < limit) {
      setButtonControl(false);
    }
    if (movies.length > limit) {
      setButtonControl(true);
    }
  }

  React.useState(() => {
    setScreenWidth(window.innerWidth);
    changeLimits();
    if (localStorage.getItem('shortInAllMoviesOn') === 'true') {
      setShortActive(true);
    } else {
      setShortActive(false);
    }
  }, [])

  React.useEffect(() => {
    checkLimit();
  }, [movies])

  React.useEffect(() => {
    function controlResize () {
      setTimeout(checkWidth, 200);
    }
    window.addEventListener('resize', controlResize);
    storeSettings();
    return () => window.removeEventListener('resize', controlResize);
  }, [screenWidth, isShortActive]);

  const handleLimitChange = () => {
    setLimit(limit + limitStep);
    if (limit >= movies.length - limitStep) {
      setButtonControl(false);
    }
  };

  const handleShortie = () => {
    setShortActive(!isShortActive);
    storeSettings();
  }

  const storeSettings = () => {
    localStorage.setItem('shortInAllMoviesOn', isShortActive);
    localStorage.setItem('limit', limit);
  }

  const processedList =  JSON.parse(localStorage.getItem('filteredMovies')) ? JSON.parse(localStorage.getItem('filteredMovies')).slice(0, limit) : [];

  const savedPhrase = localStorage.getItem('filterMoviePhrase') ? localStorage.getItem('filterMoviePhrase') : '';

  return (
    <>
      <Header isLogScreen={false} isLoggedIn={isLoggedIn} />
      <main className='movies'>
        <SearchLine
          errorMessage={allMoviesSearchError}
          filterPhrase={savedPhrase}
          filterMovies={filterMovies}
          handleShortie={handleShortie}
          isShortActive={isShortActive} />
        <Preloader isLoading={isLoading} />
        <GridContainer
          arrayOfNames={arrayOfNames}
          movies={processedList}
          buttonClass='movie__save-picture_active'
          handleLike={handleLike}
          isShortActive={isShortActive} />
        <MoreButton switcher={buttonControl} handleLimitChange={handleLimitChange} />
      </main>
      <Footer links={allLinks} />
    </>
  );
};