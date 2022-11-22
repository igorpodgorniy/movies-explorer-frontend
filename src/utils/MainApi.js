const { REACT_APP_URL, NODE_ENV } = process.env;
export const BASE_URL = NODE_ENV === 'production'
  ? REACT_APP_URL
  : 'http://localhost:3001';

export const auth = {
  logout: async () => {
    return fetch(`${BASE_URL}/signout`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    })
    .then(_checkResponse);
  },
  authorize: async (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({email, password})
    })
    .then(_checkResponse);
  },
  register: async (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({name, email, password})
    })
    .then(_checkResponse);
  },
};
export const api = {
  getUserInfo: async () => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    })
    .then(_checkResponse);
  },
  editProfile: async (newData) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'PATCH',
      headers: {
       'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(newData),
     })
     .then(_checkResponse);
  },
   likeMovie: async (movie) => {
    return fetch(`${BASE_URL}/movies`, {
      method: 'POST',
      headers: {
       'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(movie),
     })
     .then(_checkResponse);
  },
  deleteMovie: async (movieId) => {
    return fetch(`${BASE_URL}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
       'Content-Type': 'application/json'
      },
      credentials: 'include',
     })
     .then(_checkResponse);
  },
  getSavedMovies: async () => {
    return fetch(`${BASE_URL}/movies`, {
      method: 'GET',
      headers: {
       'Content-Type': 'application/json'
      },
      credentials: 'include',
     })
     .then(_checkResponse);
  }
};

function _checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}