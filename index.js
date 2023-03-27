import { createCharacterCard } from "./components/card/card.js";

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

const apiURL = "https://rickandmortyapi.com/api/character";

async function getCharacters() {
  try {
    const response = await fetch(apiURL);

    if (!response.ok) {
      console.log("Something went wrong");
    } else {
      const data = await response.json();

      data.results.forEach((result) => {
        createCharacterCard(result);
      });
    }
  } catch (error) {
    console.error(error);
  }
}
getCharacters();
