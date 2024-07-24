import URL from '../config/config.js';

const recipeIds = {
    breakfast: [],
    lunch: [],
    dinner: [],
    desserts: [],
    drinks: []
};

async function fetchMealDetails(id) {
    const response = await fetch(`${URL}recipes/id/${id}`);
    const data = await response.json();
    return data;
}

async function fetchMealIds(category) {
    const response = await fetch(`${URL}recipes/category/${category}`);
    const data = await response.json();

    data.forEach(recipe => {
        if (recipeIds[category]) {
          recipeIds[category].push(recipe.id);
        }
    });
}

async function fetchAllMealIds() {
    await Promise.all([
        fetchMealIds('breakfast'),
        fetchMealIds('lunch'),
        fetchMealIds('dinner'),
        fetchMealIds('desserts'),
        fetchMealIds('drinks')
    ]);
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

async function displayRecipes(category) {
    const categoryDiv = document.getElementById(`${category}`).querySelector('.recipes');
    for (const id of recipeIds[category]) {
        const recipe = await fetchMealDetails(id);
        const card = createRecipeCard(recipe);
        categoryDiv.appendChild(card);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await fetchAllMealIds();
    displayRecipes('breakfast');
    displayRecipes('lunch');
    displayRecipes('dinner');
    displayRecipes('desserts');
    displayRecipes('drinks');
});

document.getElementById('login-btn').addEventListener('click', function() {
window.location.href = '../html/login.html';
});

document.getElementById('searchInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const searchWord = document.getElementById('searchInput').value;
      window.location.href = `../html/search.html?search=${searchWord}`;
    }
});