import React from 'react';
import { Route, Redirect, useHistory, Switch, } from "react-router-dom";
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import moviesApi from '../../utils/MoviesApi';
import * as api from '../../utils/MainApi';
import ProtectedRoute from '../../utils/ProtectedRoute';
import * as auth from '../../utils/Auth';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { movieErrors, english_pattern, apiErr401, apiErr409, apiErrDefault } from '../../constants/constants';

function App() {

  const history = useHistory();

  const [ currentUser, setCurrentUser] = React.useState({});

  const [ isLoggedIn, setLoggedIn ] = React.useState(true);

  const [ isLoading, setLoading] = React.useState(false);

  const [ isInside, setInside ] = React.useState(false);

  const [ savedFilms, setSavedFilms ] = React.useState([]);
  const [ filteredMovies, setFilteredMovies] = React.useState([]);
  const [ allMoviesSearchError, setAllMoviesSearchError ] = React.useState('');
  const [ filteredSavedFilms, setFilteredSavedFilms] = React.useState([])
  const [ filteredSavedError, setFilteredSavedError ] = React.useState('');

  const [ arrayOfNames, setArrayOfNames ] = React.useState([]);

  const [ apiResponse, setApiResponse ] = React.useState('');

  React.useEffect(() => {
    if (isLoggedIn) {
      api.getUserData()
        .then((data) => {
          setCurrentUser(data);
          setInside(true);
        })
        .catch((message) => {
          console.log(message);
        })
    }
  }, [isLoggedIn, history]);

  React.useEffect(() => {
    if (isLoggedIn) {
    api.getSavedMovies()
      .then((data) => {
        setFilteredSavedError('');
        setSavedFilms(data.data);
        setArrayOfNames(data.data.map(movie => movie.nameRU));
      })
      .catch((message) => {
        if (message === 401) {
          dropAllSettings();
        }
        console.log(message)
        setFilteredSavedError(movieErrors.fetch_fail);
      })
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    handleCookie();
  }, []);

  const dropAllSettings = () => {
    setSavedFilms('');
    setFilteredMovies();
    localStorage.clear();
    setLoggedIn(false);
    setArrayOfNames([]);
    setApiResponse('');
    setFilteredSavedError('');
    setCurrentUser({});
    setInside(false);
    setApiResponse('');
  }

  const filterMovies = (phrase) => {
    if (!phrase) {
      setAllMoviesSearchError(movieErrors.input_empty);
      return;
    }
    setAllMoviesSearchError('');
    setFilteredMovies([]);
    setLoading(true);
    localStorage.setItem('filterMoviePhrase', phrase);
    moviesApi.getMovies()
      .then(data => {
        let filteredResult;
        if (phrase.match(english_pattern)) {
          filteredResult = data.filter((movie) => movie.nameEN.toLowerCase().includes(phrase.toLowerCase()))
        } else {
          filteredResult = data.filter((movie) => movie.nameRU.toLowerCase().includes(phrase.toLowerCase()))
        }
        setFilteredMovies(filteredResult);
        localStorage.setItem('filteredMovies', JSON.stringify(filteredResult));
        setAllMoviesSearchError(filteredResult.length === 0 ? movieErrors.nothing : '');
      })
      .catch(err => {
        if (err === 401) {
          dropAllSettings();
        }
        console.log(err);
        setAllMoviesSearchError(movieErrors.fetch_fail);
      })
      .finally(() => setLoading(false));
  };

  const filterSavedFilms = (phrase) => {
    if (!phrase) {
      setFilteredSavedError(movieErrors.input_empty);
    }
    setFilteredSavedError('');
    const filteredSavedMovies = savedFilms.filter((savedFilm) => savedFilm.nameRU.toLowerCase().includes(phrase.toLowerCase()))
    setFilteredSavedFilms(filteredSavedMovies);
    setFilteredSavedError(filteredSavedMovies.length === 0 ? movieErrors.nothing : '');
  }

  const goBack = () => {
    history.goBack();
  };

  const handleCookie = () => {
    auth.verification()
      .then((data) => {
        setCurrentUser(data);
        setLoggedIn(true);
      })
      .catch((message) => {
        console.log('Сервер недоступен');
        dropAllSettings();
      })
  }

  const handleRegistration = (name, email, password) => {
    setApiResponse('');
    auth.register(name, email, password)
      .then((data) => {
        setApiResponse('');
        setTimeout(() => {
          handleLogin(email, password);
        }, 1000)
      })
      .catch((message) => {
        if (message === 401) {
          setApiResponse(apiErr401);
        } else if (message === 409) {
          setApiResponse(apiErr409);
        } else {
          setApiResponse(apiErrDefault);
        }
        console.log(message);
      })
  }

  const handleLogin = (email, password) => {
    setApiResponse('');
    auth.auth(email, password)
      .then((data) => {
        setApiResponse('');
        setLoggedIn(true);
        history.push('/movies');
        setInside(true);
      })
      .catch((message) => {
        if (message === 401) {
          setApiResponse(apiErr401);
        } else if (message === 409) {
          setApiResponse(apiErr409);
        } else {
          setApiResponse(apiErrDefault);
        }
        console.log(message);
      })
  }

  const handleUserUpdate = (name, email) => {
    setApiResponse('');
    api.updateUser(name, email)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((message) => {
        if (message === 401) {
          setApiResponse(apiErr401);
        } else if (message === 409) {
          setApiResponse(apiErr409);
        } else {
          setApiResponse(apiErrDefault);
        }
        console.log(message);
      })
  }

  const handleLogout = () => {
    api.logout()
      .then((data) => {
        history.push('/');
        dropAllSettings();
      })
      .catch((message) => {
        if (message === 401) {
          setApiResponse(apiErr401);
        } else if (message === 409) {
          setApiResponse(apiErr409);
        } else {
          setApiResponse(apiErrDefault);
        }
        console.log(message);
      })
  }

  const handleLike = (movie) => {
    if (arrayOfNames.includes(movie.nameRU)) {
      const movieToDelete = savedFilms.find(movieToCheck => movieToCheck.nameRU === movie.nameRU);
      api.dislikeMovie(movieToDelete)
        .then((data) => {
          setSavedFilms((state) => state.filter((movieToCompare) => movieToCompare.movieId !== movie.movieId));
          setArrayOfNames((state) => state.filter((nameRU) => nameRU !== movie.nameRU));
        })
        .catch((message) => {
          if (message === 401) {
            dropAllSettings();
          }
          console.log(message);
        });
    } else {
      api.likeMovie(movie)
      .then((data) => {
        setSavedFilms([data, ...savedFilms]);
        setArrayOfNames([data.nameRU, ...arrayOfNames]);
      })
      .catch((message) => {
        if (message === 401) {
          dropAllSettings();
        }
        console.log(message);
      });
    }
  }

  const resetApiError = () => {
    setApiResponse('');
  }

  return (
    <div className='page'>

      <CurrentUserContext.Provider value={currentUser}>

        <Switch>

          <Route exact path='/'>
            <Main isLoggedIn={isLoggedIn} />
          </Route>

          <Route path='/sign-up'>
            {isInside ? (
              <Redirect to='/movies' />
            ) : (
            <Register
              isLoggedIn={isLoggedIn}
              handleRegistration={handleRegistration}
              apiResponse={apiResponse}
              resetApiError={resetApiError} />
            )}
          </Route>

          <Route path='/sign-in'>
            {isInside ? (
              <Redirect to='/movies' />
            ) : (
            <Login
              isLoggedIn={isInside}
              handleLogin={handleLogin}
              apiResponse={apiResponse}
              resetApiError={resetApiError} />
            )}
          </Route>

          <ProtectedRoute path='/movies'
            allMoviesSearchError={allMoviesSearchError}
            arrayOfNames={arrayOfNames}
            movies={filteredMovies}
            handleLike={handleLike}
            isLoading={isLoading}
            filterMovies={filterMovies}
            isLoggedIn={isLoggedIn}
            component={Movies} />

          <ProtectedRoute path='/saved-movies'
            filteredSavedError={filteredSavedError}
            filteredSavedFilms={filteredSavedFilms}
            savedFilms={savedFilms}
            handleLike={handleLike}
            filterSavedFilms={filterSavedFilms}
            isLoading={isLoading}
            isLoggedIn={isLoggedIn}
            component={SavedMovies} />

          <ProtectedRoute path='/account'
            handleUserUpdate={handleUserUpdate}
            handleLogout={handleLogout}
            isLoggedIn={isLoggedIn}
            apiResponse={apiResponse}
            resetApiError={resetApiError}
            component={Profile} />

          <Route path='/*'>
            <NotFound goBack={goBack} />
          </Route>
        </Switch>

      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;
