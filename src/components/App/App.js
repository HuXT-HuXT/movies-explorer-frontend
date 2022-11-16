import React from 'react';
import { Route, Redirect, useHistory, Switch } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { commonLinks, personalLinks, allLinks } from '../constants/links';
import { moviesC, savedFilmsC, userC } from '../../constants/constants';

function App() {

  const history = useHistory();

  const [ currentUser, setCurrentUser] = React.useState({});
  const [ isLoggedIn, setLoggedIn ] = React.useState(false);
  const [ movies, setMovies ] = React.useState([]);
  const [ savedFilms, setSavedFilms ] = React.useState([]);
  const [ isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setMovies(moviesC);
      setSavedFilms(savedFilmsC);
      setLoading(false);
    }, 1000)
  }, [])

  React.useEffect(() => {
    setCurrentUser(userC);
  })

  const goBack = () => {
    history.goBack();
  };

  const handleLike = (movie) => {
    if (movie.likes) {
      movie.likes = false;
      setSavedFilms((state) => state.filter((movieSaved) => movieSaved._id !== movie._id));
    } else {
      movie.likes = true;
      setSavedFilms([movie, ...movies]);
    }
  }

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
            <Header isLogScreen={false} />
            <Main personalLinks={personalLinks} />
            <Footer links={commonLinks} />
          </Route>
          <Route path='/movies'>
            <Header isLogScreen={false} />
            <Movies movies={movies} handleLike={handleLike} isLoading={isLoading} />
            <Footer links={allLinks} />
          </Route>
          <Route path='/saved-movies'>
            <Header isLogScreen={false} />
            <SavedMovies savedFilms={savedFilms} handleLike={handleLike} isLoading={isLoading} />
            <Footer links={allLinks} />
          </Route>
          <Route path='/sign-up'>
            <Header isLogScreen={true} />
            <Register />
          </Route>
          <Route path='/sign-in'>
            <Header isLogScreen={true} />
            <Login />
          </Route>
          <Route path='/account'>
            <Header isLogScreen={false} />
            <Profile user={currentUser.name} email={currentUser.email} />
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
