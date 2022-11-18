const { REACT_APP_URL, NODE_ENV } = process.env;
export const BASE_URL = NODE_ENV === 'production'
  ? REACT_APP_URL
  : 'http://localhost:3005';

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
      body: JSON.stringify({name, email, password})
    })
    .then(_checkResponse);
  },
};
export const api = {};

function _checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}