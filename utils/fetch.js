import fetchCharacters from '../services/fetchCharacters.js';

export default async function fetchAll() {
  const people = await fetchCharacters();
  createPeopleList(people);

  function createPeopleList(people) {
    const sliceApi = people.slice(0, 10);
    console.log(sliceApi);

    const singleCard = document.querySelector('[data-js="Card"]');
    console.log(singleCard);

    //bild greifen und zwischen speichern in einer Konstanten
    const imageOfCharacter = sliceApi[0].image;
    console.log(imageOfCharacter);

    //namen greifen und in einer Konstanten
    const nameOfCharacter = sliceApi[0].name;
    console.log(nameOfCharacter);

    //Karte erstellen

    //Bild und Name einfügen

    //Karte interaktiv machen

    //die Karte in unseren Browser anzeigen
  }
}
