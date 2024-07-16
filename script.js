const recipeIds = {
    breakfast: [53076, 52962, 52967, 52964, 52965, 52895],
    lunch: [52841, 52914, 53014, 52845, 52969, 52779],
    dinner: [52873, 52770, 52941, 52830, 52851, 53041],
    desserts: [52893, 52892, 52855, 52860, 52900, 52833],
    drinks: [12716, 13036, 12784, 11012, 17834, 12562]
};

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

function createRecipeCard(recipe, isDrink = false) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
        <img src="${isDrink ? recipe.strDrinkThumb : recipe.strMealThumb}" alt="${isDrink ? recipe.strDrink : recipe.strMeal}">
        <h3>${isDrink ? recipe.strDrink : recipe.strMeal}</h3>
    `;
    card.addEventListener('click', () => {
        window.location.href = `recipe.html?id=${isDrink ? recipe.idDrink : recipe.idMeal}&type=${isDrink ? 'drink' : 'meal'}`;
    });
    return card;
}

async function displayRecipes(category) {
    const categoryDiv = document.getElementById(`${category}`).querySelector('.recipes');
    for (const id of recipeIds[category]) {
        let recipe;
        if (category === 'drinks') {
            recipe = await fetchDrinkDetails(id);
        } else {
            recipe = await fetchMealDetails(id);
        }
        const card = createRecipeCard(recipe, category === 'drinks');
        categoryDiv.appendChild(card);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayRecipes('breakfast');
    displayRecipes('lunch');
    displayRecipes('dinner');
    displayRecipes('desserts');
    displayRecipes('drinks');
});
