import URL from '../config/config.js';

const nav = document.querySelector(".navbar");
const navLinks = document.querySelectorAll("a");
const currentURL = window.location.href;
navLinks.forEach((link) => {
    if (link.href === currentURL){
        link.classList.add("active");
    }
});

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

document.getElementById('delete-recipe').addEventListener('click', async (e) => {
    e.preventDefault();
    const recipeName = document.getElementById('recipe-name').value;

    try {
        const response = await fetch(`${URL}recipes`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: recipeName })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error('HTTP error! status: ' + response.status + ', message: ' + errorText);
        }

        const result = await response.json();
        alert('Recipe deleted successfully!');

        document.getElementById('recipe-form').reset();
    } catch (error) {
        alert('An error occurred: ' + error.message);
    }
});
