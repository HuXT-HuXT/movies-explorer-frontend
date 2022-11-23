import React from 'react';
import { Route, Redirect, useHistory, Switch, } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
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
import { personalLinks, movieErrors } from '../../constants/constants';


function App() {

  const history = useHistory();

  const [ currentUser, setCurrentUser] = React.useState({});

  const [ isLoggedIn, setLoggedIn ] = React.useState(true);

  const [ isLoading, setLoading] = React.useState(false);

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
        console.log(message)
        setFilteredSavedError(movieErrors.fetch_fail);
      })
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    handleCookie();
  }, []);


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
        const filteredResult = data.filter((movie) => movie.nameRU.toLowerCase().includes(phrase.toLowerCase()))
        setFilteredMovies(filteredResult);
        console.log(filteredResult)
        localStorage.setItem('filteredMovies', JSON.stringify(filteredResult));
        setLoading(false);
        setAllMoviesSearchError(filteredResult.length === 0 ? movieErrors.nothing : '');
      })
      .catch(err => {
        console.log(err);
        setAllMoviesSearchError(movieErrors.fetch_fail);
      })
  };

  const filterSavedFilms = (phrase) => {
    localStorage.setItem('filterSavedPhrase', phrase);
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
        console.log(message);
        setLoggedIn(false);
      })
  }

  const handleRegistration = (name, email, password) => {
    auth.register(name, email, password)
      .then((data) => {
        setApiResponse('');
        setTimeout(() => {
          handleLogin(email, password);
        }, 1000)
      })
      .catch((message) => {
        setApiResponse(message);
      })
  }

  const handleLogin = (email, password) => {
    auth.auth(email, password)
      .then((data) => {
        setApiResponse('');
        setLoggedIn(true);
        history.push('/');
      })
      .catch((message) => {
        setApiResponse(message);
      })
  }

  const handleUserUpdate = (name, email) => {
    api.updateUser(name, email)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((message) => {
        console.log(message);
      })
  }

  const handleLogout = () => {
    api.logout()
      .then((data) => {
        setLoggedIn(false);
        setCurrentUser({});
        history.push('/');
        localStorage.clear();
        setFilteredMovies([]);
      })
      .catch((message) => {
        console.log(message);
      })
  }

  const handleLike = (movie) => {
    console.log(arrayOfNames);
    if (arrayOfNames.includes(movie.nameRU)) {
      const movieToDelete = savedFilms.find(movieToCheck => movieToCheck.nameRU === movie.nameRU);
      api.dislikeMovie(movieToDelete)
        .then((data) => {
          setSavedFilms((state) => state.filter((movieToCompare) => movieToCompare.movieId !== movie.movieId));
          setArrayOfNames((state) => state.filter((nameRU) => nameRU !== movie.nameRU));
        })
        .catch((message) => {
          console.log(message);
        });
    } else {
      api.likeMovie(movie)
      .then((data) => {
        setSavedFilms([data, ...savedFilms]);
        setArrayOfNames([data.nameRU, ...arrayOfNames]);
        console.log(data);
      })
      .catch((message) => {
        console.log(message);
      });
    }
  }

  return (
    <div className='page'>

      <CurrentUserContext.Provider value={currentUser}>

        <Switch>

          <Route exact path='/'>
            <Main personalLinks={personalLinks} isLoggedIn={isLoggedIn} />
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
            component={Profile} />

          <Route path='/sign-up'>
            <Header isLogScreen={true} />
            <Register
              handleRegistration={handleRegistration}
              apiResponse={apiResponse} />
          </Route>

          <Route path='/sign-in'>
            <Header isLogScreen={true} />
            <Login
              handleLogin={handleLogin}
              apiResponse={apiResponse} />
          </Route>

          <Route path='/*'>
            <NotFound goBack={goBack} />
          </Route>
        </Switch>

      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;
