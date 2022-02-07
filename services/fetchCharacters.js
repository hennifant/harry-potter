const apiUrl = 'https://hp-api.herokuapp.com/api/characters';

export default async function fetchCharacters() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
}
