import URL from '../config/config.js';

const foundRecipes = [];

async function fetchMealDetails(id) {
  const response = await fetch(`${URL}recipes/id/${id}`);
  const data = await response.json();
  return data;
}

async function fetchFavoriteMealIds() {
  const response = await fetch(`http://localhost:5501/api/favorites`);
  const data = await response.json();

  if (data.length === 0) {
    document.getElementById('recipes').innerHTML = '<p>No favorite recipes found.</p>';
  }
  foundRecipes.length = 0;
  data.forEach(recipe => {
    foundRecipes.push(recipe.recipe_id);
  });

  displayRecipes();
}

function timeSince(date) {
  const now = new Date();
  const secondsPast = Math.floor((now - new Date(date)) / 1000);

  if (secondsPast < 60) {
      return `${secondsPast} seconds ago`;
  }
  if (secondsPast < 3600) {
      return `${Math.floor(secondsPast / 60)} minutes ago`;
  }
  if (secondsPast < 86400) {
      return `${Math.floor(secondsPast / 3600)} hours ago`;
  }
  if (secondsPast < 2592000) {
      return `${Math.floor(secondsPast / 86400)} days ago`;
  }
  if (secondsPast < 31536000) {
      return `${Math.floor(secondsPast / 2592000)} months ago`;
  }
  return `${Math.floor(secondsPast / 31536000)} years ago`;
}

function createRecipeCard(recipe) {
  const card = document.createElement('div');
  card.className = 'recipe-card';
  const addedDate = timeSince(recipe.addedDate);
  card.innerHTML = `
      <img src="${recipe.img}" alt="${recipe.title}">
      <h3>${recipe.title}</h3>
      <p><span class="views-count">${recipe.views}</span> views &bull; ${addedDate}</p>
  `;
  card.addEventListener('click', () => {
    fetch('http://localhost:3000/api/increase-views', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: recipe.id })
    })
    .then(response => response.json())
    .then(data => {
        card.querySelector('.views-count').textContent = data.views;
        window.location.href = `../html/recipe.html?id=${recipe.id}&type=${'meal'}`;
    })
    .catch(error => console.error('Error:', error));
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

window.onload = () => {
  fetchFavoriteMealIds();
};

document.addEventListener('DOMContentLoaded', async () => {
  document.getElementById('logout').addEventListener('click', (event) => {
    event.preventDefault();
    fetch('http://localhost:5501/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            window.location.href = '/';
        } else {
            console.error('Logout failed');
        }
    })
    .catch(error => console.error('Error:', error));
  });
});