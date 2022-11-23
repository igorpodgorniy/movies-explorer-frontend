import { BASE_MOVI_URL } from './constants';

export const loadMovies = async () => {
  return fetch(`${BASE_MOVI_URL}/beatfilm-movies`, {
    method: 'GET',
    headers: {
     'Content-Type': 'application/json'
    },
   })
   .then(_checkResponse);
}

function _checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}