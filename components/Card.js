export default function Card(person) {
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
  return cardElement;
}
