import URL from '../config/config.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
      const response = await fetch(`${URL}cuisines`,);
      if (response.ok) {
          const cuisines = await response.json();
          const container = document.getElementById('cuisines-container');
          
          cuisines.forEach(cuisine => {
              const card = document.createElement('div');
              card.classList.add('cuisine-card');
              
              card.innerHTML = `
                <a href="../html/cuisine-details.html?id=${cuisine.id}">
                  <img src="${cuisine.img}" alt="${cuisine.title}">
                  <div class="title">${cuisine.title}</div>
                </a>
              `;
              
              container.appendChild(card);
          });
      } else {
          console.error('Failed to fetch cuisines');
      }
  } catch (error) {
      console.error('Error:', error);
  }

  document.getElementById('logout').addEventListener('click', (event) => {
    event.preventDefault();
    fetch('http://localhost:5501/logout', {
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
    .catch(error => console.error('Error:', error));
  });
});