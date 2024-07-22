import URL from '../config/config.js';

async function fetchMealNames(id) {
    const response = await fetch(`${URL}recipes/id/${id}`);
    const data = await response.json();
    return data.title;
}

document.getElementById('show-recipe').addEventListener('click', async (e) => {
    e.preventDefault();

    const category = document.getElementById('category').value;
    const response = await fetch(`${URL}recipes/category/${category}`);
    const data = await response.json();

    const names = await Promise.all(data.map(async (recipe) => {
        try {
            return await fetchMealNames(recipe.id);
        } catch (error) {
            console.error(`Error fetching recipe ${recipe.id}:`, error);
            return 'Recipe not found';
        }
    }));

    const recipeNamesList = document.getElementById('recipe-name');
    recipeNamesList.innerHTML = '';
    names.forEach(name => {
        const option = document.createElement('option');
        option.textContent = name;
        recipeNamesList.appendChild(option);
    })
});

document.getElementById('show-details').addEventListener('click', async (e) => {
    e.preventDefault();

    const recipeName = document.getElementById("recipe-name").value;
    const response = await fetch(`${URL}recipes/title/${recipeName}`);
    const recipe = await response.json();

    const detailsDiv = document.querySelector('.recipe-details');
    detailsDiv.innerHTML = `
    <h3>${recipe.title}</h3>
    <img src="${recipe.img}" alt="${recipe.title}" style="width: 100px; height: 100px;">
    <h4>Ingredients:</h4>
    <p style="max-width: 400px">
      ${recipe.ingredients}
    </p>
    <h4>Instructions:</h4>
    <p style="max-width: 400px">
      ${recipe.instructions}
    </p>
  `;
});


document.getElementById('patch-recipe').addEventListener('click', async (e) => {
    e.preventDefault();

    const title = document.getElementById('recipe-name').value;
    const section = document.getElementById('section').value;
    const patch = document.getElementById('patch').value;

    const updateData = {
        title,
        section,
        patch
    };

    try {
        const response = await fetch(`${URL}recipes`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error('HTTP error! status: ' + response.status + ', message: ' + errorText);
        }

        const result = await response.json();
        alert('Recipe updated successfully!');

        document.getElementById('recipe-form').reset();
    } catch (error) {
        alert('An error occurred: ' + error.message);
    }
});
