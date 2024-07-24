import URL from '../config/config.js';

async function fetchMealDetails(id) {
    const response = await fetch(`${URL}recipes/id/${id}`);
    const data = await response.json();
    return data;
}

async function displayRecipes(category) {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const recipe = await fetchMealDetails(id);

    if (recipe) {
        document.getElementById('recipe-image').src = recipe.img;
        document.getElementById('recipe-title').textContent = recipe.title;

        const ingredientsList = document.getElementById('recipe-ingredients');
        ingredientsList.innerHTML = '';

        if (typeof recipe.ingredients === 'string') {
            const ingredientsArray = recipe.ingredients.split(';');
            ingredientsArray.forEach(ingredient => {
                const li = document.createElement('li');
                li.textContent = ingredient.trim();
                ingredientsList.appendChild(li);
            });
        }

        const instructionsList = document.getElementById('recipe-instructions');
        instructionsList.innerHTML = '';

        if (typeof recipe.instructions === 'string') {
            const instructionsArray = recipe.instructions.split(';');
            instructionsArray.forEach(instruction => {
                const li = document.createElement('li');
                li.textContent = instruction.trim();
                instructionsList.appendChild(li);
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayRecipes('breakfast');
    displayRecipes('lunch');
    displayRecipes('dinner');
    displayRecipes('desserts');
    displayRecipes('drinks');
});

document.getElementById('searchInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const searchWord = document.getElementById('searchInput').value;
      window.location.href = `../html/search.html?search=${searchWord}`;
    }
});