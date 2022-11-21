export const BASE_URL = 'http://localhost:80';

export const register = (name, email, password) => fetch(`${BASE_URL}/signup`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name,
    email,
    password,
  }),
})
  .then(handleResponse);

export const auth = (email, password) => fetch(`${BASE_URL}/signin`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
  body: JSON.stringify({
    email,
    password,
  }),
})
  .then(handleResponse);

export const verification = () => fetch(`${BASE_URL}/users/me`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
})
  .then(handleResponse);

export const logout = () => fetch(`${BASE_URL}/signout`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
})
  .then(handleResponse);

const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(response.status);
};
