import fetchCharacters from './services/fetchCharacters.js';
import Card from './components/Card.js';

let numCharactersToShow = 10;
const numCharactersToAddOnLoad = 10;
let selectedHouse;

init();

async function init() {
  const people = await fetchCharacters();
  createPeopleList();

  function createPeopleList() {
    const listOfCards = document.querySelector('[data-js="card-container"]');
    listOfCards.innerHTML = '';

    people
      .filter(
        person =>
          person.house === selectedHouse ||
          selectedHouse === 'All' ||
          selectedHouse === undefined
      )
      .slice(0, numCharactersToShow)
      .forEach(person => {
        const cardElement = Card(person);

        listOfCards.append(cardElement);

        const allUlItems = cardElement.querySelector('ul');
        cardElement.addEventListener('click', () => {
          allUlItems.toggleAttribute('hidden');
        });
      });
  }

  const buttonLoadMore = document.querySelector('[data-js="loadmore1"]');
  buttonLoadMore.addEventListener('click', () => {
    numCharactersToShow += numCharactersToAddOnLoad;
    createPeopleList();
  });

  initFilter();

  function initFilter() {
    const fieldSet = document.createElement('fieldset');
    fieldSet.innerHTML = `
  <input value="All" type="radio" name="filter" id="all" />
  <label for="all">All</label>
  <input value="Gryffindor" type="radio" name="filter" id="Gryffindor" checked />
  <label for="Gryffindor">Gryffindor</label>
  <input value="Hufflepuff" type="radio" name="filter" id="Hufflepuff" />
  <label for="Hufflepuff">Hufflepuff</label>
  <input value="Ravenclaw" type="radio" name="filter" id="Ravenclaw" />
  <label for="Ravenclaw">Ravenclaw</label>
  <input value="Slytherin" type="radio" name="filter" id="Slytherin" />
  <label for="Slytherin">Slytherin</label>
    `;
    const filterForm = document.querySelector('[data-js="filter"]');
    filterForm.append(fieldSet);

    filterPeopleList(); // initial
    filterForm.addEventListener('change', filterPeopleList); // on filter change

    function filterPeopleList() {
      selectedHouse = filterForm.elements.filter.value;
      createPeopleList();
    }
  }
}
//
