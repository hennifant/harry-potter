import fetchCharacters from '../services/fetchCharacters.js';

export default async function fetchAll() {
  const people = await fetchCharacters();
  createPeopleList(people);

  function createPeopleList(people) {
    const sliceApi = people.slice(0, 10);
    console.log(sliceApi);

    // const singleCard = document.querySelector('[data-js="Card"]');
    // console.log(singleCard);

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
      document.body.append(cardElement);

      const allUlItems = cardElement.querySelector('ul');
      cardElement.addEventListener('click', () => {
        allUlItems.toggleAttribute('hidden');
      });
    });
    //  let hogwardsCards = [];

    //Bild und Name einfügen

    //Karte interaktiv machen

    //die Karte in unseren Browser anzeigen

    //console.log(imageOfCharacter);

    // //bild greifen und zwischen speichern in einer Konstanten
    // const imageOfCharacter = sliceApi[0].image;
    // console.log(imageOfCharacter);

    // //namen greifen und in einer Konstanten
    // const nameOfCharacter = sliceApi[0].name;
    // console.log(nameOfCharacter);

    // //Kartenobjekt erstellen

    // const newCard = {
    //   image: imageOfCharacter,
    //   name: nameOfCharacter,
    // };
  }
}
