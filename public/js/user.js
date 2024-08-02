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

async function fetchFavorites() {
    const response = await fetch(`http://localhost:5501/api/favorites`);
    const data = await response.json();
    const favs = data.map(recipe => recipe.recipe_id);

    const buttons = document.querySelectorAll('.favorite-btn');
    buttons.forEach(button => {
        const recipeId = parseInt(button.getAttribute('id'));
        if (favs.includes(recipeId)) {
            button.classList.add('favorited');
        }
    });
    return favs;
}

function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    const addedDate = timeSince(recipe.addedDate);
    card.innerHTML = `
        <img src="${recipe.img}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
        <p><span class="views-count">${recipe.views}</span> views &bull; ${addedDate}</p>
        <button class="favorite-btn" id=${recipe.id}>
            <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
        </button>
    `;
    const img = card.querySelector('img');
    img.addEventListener('click', () => {
        fetch(`${URL}api/increase-views`, {
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
    const favoriteBtn = card.querySelector('.favorite-btn');
    favoriteBtn.addEventListener('click', async () => {
        try {
            const favoriteRecipes = await fetchFavorites();
            const recipeId = recipe.id;
    
            if (favoriteRecipes.includes(recipeId)) {
                await fetch(`http://localhost:5501/api/favorites/remove`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ recipeId })
                });
                favoriteBtn.classList.remove('favorited');
                console.log('Removed from favorites');
            } else {
                await fetch(`http://localhost:5501/api/favorites/add`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ recipeId })
                });
                favoriteBtn.classList.add('favorited');
                console.log('Added to favorites');
            }
        } catch (error) {
            console.error('Error:', error);
        }
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
    await displayRecipes('breakfast');
    await displayRecipes('lunch');
    await displayRecipes('dinner');
    await displayRecipes('desserts');
    await displayRecipes('drinks');
    await fetchFavorites();
});

document.getElementById('searchInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const searchWord = document.getElementById('searchInput').value;
      window.location.href = `../html/search.html?search=${searchWord}`;
    }
});

document.getElementById('logout').addEventListener('click', (event) => {
    event.preventDefault();
  
    fetch('/logout', {
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
    .catch(error => console.error('Error:', error))
});