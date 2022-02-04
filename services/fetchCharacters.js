const apiUrl = 'https://hp-api.herokuapp.com/api/characters';

export default function fetchCharacters() {
  return fetch(apiUrl)
    .then(response => response.json())
    .catch(error => console.log(error));
}
