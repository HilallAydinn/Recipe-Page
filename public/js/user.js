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
        <i class='bx bxs-heart' ></i>
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