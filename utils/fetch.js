export default function fetchAll() {
  const apiUrl = 'https://swapi.dev/api/people';
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => createPeopleList(data.results))
    .catch(error => console.log(error));

  function createPeopleList(people) {
    console.log(people);
  }
}
