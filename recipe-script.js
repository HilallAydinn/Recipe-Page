async function fetchMealDetails(mealId) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    return data.meals[0];
}

async function fetchDrinkDetails(drinkId) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`);
    const data = await response.json();
    return data.drinks[0];
}

async function displayRecipes(category) {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const type = urlParams.get('type');

    let recipe;
    if (type === 'drink') {
        recipe = await fetchDrinkDetails(id);
    } else {
        recipe = await fetchMealDetails(id);
    }

    if (recipe) {
        document.getElementById('recipe-image').src = type === 'drink' ? recipe.strDrinkThumb : recipe.strMealThumb;
        document.getElementById('recipe-title').textContent = type === 'drink' ? recipe.strDrink : recipe.strMeal;

        const ingredientsList = document.getElementById('recipe-ingredients');
        ingredientsList.innerHTML = '';

        if (type === 'drink') {
            for (let i = 1; i <= 15; i++) {
                if (recipe[`strIngredient${i}`]) {
                    const li = document.createElement('li');
                    li.textContent = `${recipe[`strMeasure${i}`] || ''} ${recipe[`strIngredient${i}`]}`;
                    ingredientsList.appendChild(li);
                }
            }
        } else {
            for (let i = 1; i <= 20; i++) {
                if (recipe[`strIngredient${i}`]) {
                    const li = document.createElement('li');
                    li.textContent = `${recipe[`strMeasure${i}`]} ${recipe[`strIngredient${i}`]}`;
                    ingredientsList.appendChild(li);
                }
            }
        }

        document.getElementById('recipe-instructions').textContent = type === 'drink' ? recipe.strInstructions : recipe.strInstructions;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayRecipes('breakfast');
    displayRecipes('lunch');
    displayRecipes('dinner');
    displayRecipes('desserts');
    displayRecipes('drinks');
});
