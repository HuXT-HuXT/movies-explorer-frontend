export const BASE_URL = 'http://api.huxt-huxt.nomoredomains.icu';

export const getUserData = () => fetch(`${BASE_URL}/users/me`, {
  method: 'GET',
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(handleResponse);

export const getSavedMovies = () => fetch(`${BASE_URL}/movies`, {
  method: 'GET',
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(handleResponse);

export const updateUser = (name, email) => fetch(`${BASE_URL}/users/me`, {
  method: 'PATCH',
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name,
    email,
  })
})
  .then(handleResponse);

export const logout = () => fetch(`${BASE_URL}/signout`, {
  method: 'GET',
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(handleResponse);

export const likeMovie = (movie) => fetch(`${BASE_URL}/movies`, {
  method: 'POST',
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: `https://api.nomoreparties.co/${movie.image.url}`,
    trailerLink: movie.trailerLink,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
    thumbnail: `https://api.nomoreparties.co/${movie.image.url}`,
    movieId: movie.id,
  })
})
  .then(handleResponse);

export const dislikeMovie = (movie) => fetch(`${BASE_URL}/movies/${movie._id}`, {
  method: 'DELETE',
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
})

const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(response.status);
};