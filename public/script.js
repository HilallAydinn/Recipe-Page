const recipeIds = {
    breakfast: [1, 2, 3, 4, 5, 6],
    lunch: [7, 8, 9, 10, 11, 12],
    dinner: [13, 14, 15, 16, 17, 18],
    desserts: [19, 20, 21, 22, 23, 24],
    drinks: [25, 26, 27, 28, 29, 30]
};

async function fetchMealDetails(id) {
    const response = await fetch(`http://localhost:4000/recipes/${id}`);
    const data = await response.json();
    return data;
}

function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
        <img src="${recipe.img}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
    `;
    card.addEventListener('click', () => {
        window.location.href = `recipe.html?id=${recipe.id}&type=${'meal'}`;
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

document.addEventListener('DOMContentLoaded', () => {
    displayRecipes('breakfast');
    displayRecipes('lunch');
    displayRecipes('dinner');
    displayRecipes('desserts');
    displayRecipes('drinks');
});


document.getElementById('admin-btn').addEventListener('click', function() {
window.location.href = 'login.html';
});


