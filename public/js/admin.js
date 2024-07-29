import URL from '../config/config.js';

document.addEventListener("DOMContentLoaded", function() {
    fetch(`${URL}api/recipe-counts`)
      .then(response => response.json())
      .then(data => {
        data.forEach(categoryData => {
          updateRecipeCount(categoryData.category, categoryData.count);
        });
      })
      .catch(error => {
        console.error("Error fetching recipe counts:", error);
      });
  });

function updateRecipeCount(category, count) {
    const categoryElement = document.getElementById(category);
    if (categoryElement) {
      const numberElement = categoryElement.querySelector(".number");
      if (numberElement) {
        numberElement.innerHTML = `<b>${count}</b><br>Recipes`;
      }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    fetch(`${URL}api/most-viewed`)
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('recipe-container');
        data.forEach(recipe => {
          const card = createRecipeCard(recipe);
          container.appendChild(card);
        });
      })
      .catch(error => {
        console.error("Error fetching most viewed recipes:", error);
      });
  });

function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';

    const img = document.createElement('img');
    img.src = recipe.img;
    img.alt = recipe.title;

    const title = document.createElement('p');
    title.className = 'recipe-card-title';
    title.textContent = recipe.title;

    const views = document.createElement('p');
    views.className = 'recipe-card-views';
    views.textContent = `${recipe.views} views`;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(views);

    return card;
}

document.addEventListener("DOMContentLoaded", function() {
  fetch(`${URL}api/last-registered-users`)
    .then(response => response.json())
    .then(data => {
      const tbody = document.getElementById('users-tbody');
      data.forEach(user => {
        const row = document.createElement('tr');

        const usernameCell = document.createElement('td');
        usernameCell.textContent = user.username;
        row.appendChild(usernameCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = user.email;
        row.appendChild(emailCell);

        const dateCell = document.createElement('td');
        dateCell.textContent = new Date(user.date).toLocaleString('tr-TR');
        row.appendChild(dateCell);

        tbody.appendChild(row);
      });
    })
    .catch(error => {
      console.error("Error fetching last registered users:", error);
    });
});

document.addEventListener("DOMContentLoaded", function() {
  fetch(`${URL}api/total-users`)
    .then(response => response.json())
    .then(data => {
      const usersElement = document.getElementById('number-of-users');
      usersElement.innerHTML = `${data.totalUsers}<br> Registered Users`;
    })
    .catch(error => {
      console.error("Error fetching total users:", error);
    });

  fetch(`${URL}api/total-views`)
    .then(response => response.json())
    .then(data => {
      const viewsElement = document.getElementById('number-of-views');
      viewsElement.innerHTML = `${data.totalViews}<br> Views`;
    })
    .catch(error => {
      console.error("Error fetching total views:", error);
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const sidePanel = document.getElementById('side-panel');
  const panelContent = document.getElementById('panel-content');
  const statisticsContainer = document.getElementById('statistics-container');
  const popup = document.getElementById('popup');
  const closeButton = document.getElementById('close-popup');
  const popupMessage = document.getElementById('popup-message');

  function showPopup(message) {
    popupMessage.textContent = message;
    popup.style.display = 'block';
  }

  closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  document.getElementById('profile-photo').addEventListener('click', function() {
    closePanel();
  });

  document.getElementById('add-recipe-link').addEventListener('click', function() {
    openPanel();
    panelContent.innerHTML = `
      <form id="add-recipe-form">
        <label for="title">Title:</label><br>
        <input type="text" id="title" name="title" required><br><br>
  
        <label for="img">Image URL:</label><br>
        <input type="text" id="img" name="img" required><br><br>
  
        <label for="ingredients">Ingredients:</label><br>
        <textarea id="ingredients" name="ingredients" required></textarea><br><br>
  
        <label for="instructions">Instructions:</label><br>
        <textarea id="instructions" name="instructions" required></textarea><br><br>
  
        <label for="category">Category:</label><br>
        <select id="category" name="category">
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="desserts">Desserts</option>
          <option value="drinks">Drinks</option>
        </select><br><br>
  
        <button type="submit">Add Recipe</button>
      </form>
    `;

    document.getElementById('add-recipe-form').addEventListener('submit', async (e) => {
      e.preventDefault();

      const title = document.getElementById('title').value;
      const img = document.getElementById('img').value;
      const ingredients = document.getElementById('ingredients').value;
      const instructions = document.getElementById('instructions').value;
      const category = document.getElementById('category').value;

      const recipe = {
          title,
          img,
          ingredients,
          instructions,
          category
      };

      try {
          const response = await fetch(`${URL}recipes`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(recipe)
          });

          if (!response.ok) {
              const errorText = await response.text();
              throw new Error('HTTP error! status: ' + response.status + ', message: ' + errorText);
          }

          const result = await response.json();
          showPopup('Recipe added successfully!');

          document.getElementById('add-recipe-form').reset();
      } catch (error) {
        showPopup('An error occured.');
      }
    });
  });

  document.getElementById('delete-recipe-link').addEventListener('click', function() {
    openPanel();
    panelContent.innerHTML = `
      <form id="delete-recipe-form">
        <label for="category">Category:</label><br>
        <select id="category" name="category">
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="desserts">Desserts</option>
          <option value="drinks">Drinks</option>
        </select><br><br>
        <button id="show-recipe" type="button">Show Recipes</button><br><br>
  
        <label for="recipe-name">Recipe Name:</label><br>
        <select id="recipe-name" name="recipe-name"></select><br><br>
  
        <button id="delete-recipe" type="button">Delete Recipe</button>
      </form>
    `;

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
      });
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
          showPopup('Recipe deleted successfully!');

          document.getElementById('delete-recipe-form').reset();
      } catch (error) {
          showPopup('An error occured.');
      }
    });
  });

  document.getElementById('patch-recipe-link').addEventListener('click', function() {
    openPanel();
    panelContent.innerHTML = `
      <form id="patch-recipe-form">
        <label for="category">Category:</label><br>
        <select id="category" name="category">
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="desserts">Desserts</option>
          <option value="drinks">Drinks</option>
        </select><br><br>

        <button id="show-recipe" type="button">Show Recipes</button><br><br>

        <label for="recipe-name">Recipe Name:</label><br>
        <select id="recipe-name" name="recipe-name"></select><br><br>

        <button id="show-details" type="button">Show Details</button><br><br>

        <div class="recipe-details"></div>

        <label for="section">Section:</label><br>
        <select id="section" name="section">
          <option value="title">Title</option>
          <option value="img">Image</option>
          <option value="ingredients">Ingredients</option>
          <option value="instructions">Instructions</option>
          <option value="category">Category</option>
        </select><br><br>

        <label for="patch">Patch:</label><br>
        <textarea id="patch" name="patch" required></textarea><br><br>

        <button id="patch-recipe" type="button">Patch Recipe</button>
      </form>
    `;

    document.getElementById('show-recipe').addEventListener('click', async (e) => {
      e.preventDefault();

      const category = document.getElementById('category').value;
      try {
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
        });
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    });

    document.getElementById('show-details').addEventListener('click', async (e) => {
      e.preventDefault();

      const recipeName = document.getElementById("recipe-name").value;
      try {
        const response = await fetch(`${URL}recipes/title/${recipeName}`);
        const recipe = await response.json();

        const detailsDiv = document.querySelector('.recipe-details');
        detailsDiv.innerHTML = `
          <h3>${recipe.title}</h3>
          <img src="${recipe.img}" alt="${recipe.title}" style="width: 100px; height: 100px;">
          <h4>Ingredients:</h4>
          <p style="max-width: 400px">${recipe.ingredients}</p>
          <h4>Instructions:</h4>
          <p style="max-width: 400px">${recipe.instructions}</p>
        `;
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
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
        showPopup('Recipe updated successfully!');
        document.getElementById('patch-recipe-form').reset();
      } catch (error) {
        showPopup('An error occured');
      }
    });
  });

  function openPanel() {
    sidePanel.classList.add('active');
    statisticsContainer.classList.add('blurred');
  }

  function closePanel() {
    sidePanel.classList.remove('active');
    statisticsContainer.classList.remove('blurred');
  }

  async function fetchMealNames(id) {
    const response = await fetch(`${URL}recipes/id/${id}`);
    const data = await response.json();
    return data.title;
  }
});