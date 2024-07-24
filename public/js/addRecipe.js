import URL from '../config/config.js';

const nav = document.querySelector(".navbar");
const navLinks = document.querySelectorAll("a");
const currentURL = window.location.href;
navLinks.forEach((link) => {
    if (link.href === currentURL){
        link.classList.add("active");
    }
});

document.getElementById('recipe-form').addEventListener('submit', async (e) => {
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
        alert('Recipe added successfully!');

        document.getElementById('recipe-form').reset();
    } catch (error) {
        alert('An error occurred: ' + error.message);
    }
});
