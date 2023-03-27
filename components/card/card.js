export function createCharacterCard() {
  const cardContainer = document.querySelector('[data-js="card-container"]');

  const characterImgSrc = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";

  const characterName = "Rick Sanchez";

  const characterStatus = "Alive";
  const characterType = "";
  const characterOccurrences = "51";


  const characterList = document.createElement('li');
  characterList.classList.add('card');

  const characterImageContent = document.createElement('div');
  characterImageContent.classList.add('card__image-container');

  const characterImage = document.createElement('img');
  characterImage.classList.add('card__image');
  characterImage.src = characterImgSrc;
  characterImage.alt = characterName;

  const characterImageOpacity = document.createElement('div');
  characterImageOpacity.classList.add('card__image-gradient')

  const characterMainContent = document.createElement('div');
  characterMainContent.classList.add('card__content');

  const characterHeadline = document.createElement('h2');
  characterHeadline.classList.add('card__title');
  characterHeadline.textContent = characterName

  const characterInfo = document.createElement('dl');
  characterInfo.classList.add('card__info');

  characterInfo.innerHTML = `
  <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${characterStatus}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${characterType}</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${characterOccurrences}</dd>
  `;

  characterList.append(characterImageContent);
  characterList.append(characterMainContent);

  characterImageContent.append(characterImage);
  characterImageContent.append(characterImageOpacity);
  characterMainContent.append(characterHeadline);
  characterMainContent.append(characterInfo);

  cardContainer.append(characterList);


}

createCharacterCard();
