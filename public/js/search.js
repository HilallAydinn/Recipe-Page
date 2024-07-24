import URL from '../config/config.js';

const foundRecipes = [];

async function fetchMealDetails(id) {
  const response = await fetch(`${URL}recipes/id/${id}`);
  const data = await response.json();
  return data;
}

async function fetchMealIds(searchWord) {
  const response = await fetch(`${URL}search/?q=${searchWord}`);
  const data = await response.json();

  if (data.length === 0) {
    window.location.href = 'recipeNotFound.html';
  }
  foundRecipes.length = 0;
  data.forEach(recipe => {
    foundRecipes.push(recipe.id);
  });

  displayRecipes();
}

function createRecipeCard(recipe) {
  const card = document.createElement('div');
  card.className = 'recipe-card';
  card.innerHTML = `
      <img src="${recipe.img}" alt="${recipe.title}">
      <h3>${recipe.title}</h3>
  `;
  card.addEventListener('click', () => {
      window.location.href = `../html/recipe.html?id=${recipe.id}&type=${'meal'}`;
  });
  return card;
}

async function displayRecipes() {
  const recipeDiv = document.getElementById('recipes');
  recipeDiv.innerHTML = '';
  for (const id of foundRecipes) {
      const recipe = await fetchMealDetails(id);
      const card = createRecipeCard(recipe);
      recipeDiv.appendChild(card);
  }
}

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
window.onload = () => {
  const searchWord = getQueryParam('search');
  if (searchWord) {
    fetchMealIds(searchWord);
  }
};