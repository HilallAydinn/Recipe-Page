import URL from '../config/config.js';

document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  try {
      const response = await fetch(`${URL}cuisines/id/${id}`);
      if (response.ok) {
          const cuisine = await response.json();
          const container = document.getElementById('detail-container');
          const card = document.createElement('div');
          card.classList.add('cuisine-card');
          
          card.innerHTML = `
            <div class="title">${cuisine.title}</div>
            <div class="info">
              <img src="${cuisine.img}" alt="${cuisine.title}">
              ${cuisine.information}
            </div>
          `;
          container.appendChild(card);
      } else {
          console.error('Failed to fetch cuisines');
      }
  } catch (error) {
      console.error('Error:', error);
  }
});