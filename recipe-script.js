async function fetchMealDetails(id) {
    const response = await fetch(`http://localhost:4000/recipes/${id}`);
    const data = await response.json();
    return data;
}

async function displayRecipes(category) {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    recipe = await fetchMealDetails(id);

    if (recipe) {
        document.getElementById('recipe-image').src = recipe.img;
        document.getElementById('recipe-title').textContent = recipe.title;

        const ingredientsList = document.getElementById('recipe-ingredients');
        ingredientsList.innerHTML = '';

        for (let i = 1; i <= 20; i++) {
            if (recipe[`ingredient${i}`]) {
                const li = document.createElement('li');
                li.textContent = `${recipe[`ingredient${i}`]}`;
                ingredientsList.appendChild(li);
            }
        }

        const instructionsList = document.getElementById('recipe-instructions');
        instructionsList.innerHTML = '';

        for (let i = 1; i <= 20; i++) {
            if (recipe[`instruction${i}`]) {
                const li = document.createElement('li');
                li.textContent = `${recipe[`instruction${i}`]}`;
                instructionsList.appendChild(li);
            }
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
