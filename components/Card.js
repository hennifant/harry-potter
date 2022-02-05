import fetchCharacters from '../services/fetchCharacters.js';

let sliceApi = [];
let a = Number(0);
let b = Number(10);

export default async function fetchAll() {
  const people = await fetchCharacters();
  createPeopleList(people);

  function createPeopleList() {
    newPeople(a, b);
    console.log(sliceApi);

    sliceApi.forEach(person => {
      const imageOfCharacter = person.image; //bild greifen und zwischen speichern in einer Konstanten
      const nameOfCharacter = person.name; //namen greifen und in einer Konstanten
      const houseOfCharacter = person.house;
      const ancestryOfCharacter = person.ancestry;
      const wandOfCharacter = Object.entries(person.wand);
      const actorOfCharacter = person.actor;
      const cardElement = document.createElement('section');
      const wandMadeOf = wandOfCharacter.map(wandItem => {
        wandItem = wandItem.join(': ');
        return wandItem;
      });

      cardElement.className = 'Card';
      cardElement.innerHTML = `
      <figure>
        <img
          data-js="image-character"
          class="Card__img"
          src="${imageOfCharacter}"
          alt=""
          height="auto"
          width="100"
        />
      </figure>
      <p data-js="name-character" class="Card__name">${nameOfCharacter}</p>
      <ul hidden>
      <li>House: ${houseOfCharacter}</li>
      <li>Ancestry: ${ancestryOfCharacter}</li>
      <li>Wand:
      <ul>
      <li>${wandMadeOf[0]}</li>
      <li>${wandMadeOf[1]}</li>
      <li>${wandMadeOf[2]}</li>
      </ul></li>
      <li>Actor: ${actorOfCharacter}</li>
      </ul>
        `;

      const listOfCards = document.querySelector('[data-js="fetch1"]');
      listOfCards.append(cardElement);

      const allUlItems = cardElement.querySelector('ul');
      cardElement.addEventListener('click', () => {
        allUlItems.toggleAttribute('hidden');
      });
    });
  }

  function newPeople(start, end) {
    sliceApi = people.slice(start, end);
    return sliceApi;
  }

  const buttonLoadMore = document.querySelector('[data-js="loadmore1"]');
  buttonLoadMore.addEventListener('click', () => {
    a = b + 1;
    b = b + 10;
    createPeopleList();
  });
}
