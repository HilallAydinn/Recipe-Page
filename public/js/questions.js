import URL from '../config/config.js';

async function fetchAllQuestions() {
  const response = await fetch(`${URL}questions`);
  const data = await response.json();
  return data;
}

function createQuestionCard(question) {
  const card = document.createElement('div');
  card.className = 'question-card';
  const date = new Date(question.date);
  const formattedDate = date.toLocaleDateString('en-GB');
  card.innerHTML = `
    <h2 id="question-title">${question.title}</h2>
    <p id="question-text">${question.text}</p>
    <hr>
    <div id="card-info">
      <p>Asked by <b>${question.askedBy}</b> on ${formattedDate}</p>
      <p>${question.comment_count} comments</p>
    </div>
  `;

  card.addEventListener('click', () => {
    window.location.href = `../html/question-details.html?id=${question.id}&type=${'question'}`;
  })
  return card;
}

async function loadQuestions() {
  const questionContainer = document.querySelector('.question-container');
  const questions = await fetchAllQuestions();

  questions.forEach(question => {
    const questionCard = createQuestionCard(question);
    questionContainer.appendChild(questionCard);
  });
}

function displayQuestionForms() {
  const questionContainer = document.querySelector('.question-container');
  const askBtn = questionContainer.querySelector('#ask-btn');
  const questionFormContainer = questionContainer.querySelector('#question-form-container');
  const loginMessage = questionContainer.querySelector('#login-message');

  askBtn.addEventListener('click', () => {
    fetch('/api/auth/check', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.isAuthenticated) {
        questionFormContainer.style.display = 'block';
        loginMessage.style.display = 'none';
      } else {
        loginMessage.style.display = 'block';
      }
    })
    .catch(error => console.error('Error:', error));
  });

  const questionForm = questionContainer.querySelector('#question-form');

  questionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const questionTitle = questionContainer.querySelector('#question-title').value;
    const questionText = questionContainer.querySelector('#question-text').value;

    fetch('/api/questions/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: questionTitle,
        text: questionText
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Question added successfully') {
        alert('Question added!');
        questionFormContainer.style.display = 'none';
        card.querySelector('#question-text').value = '';
      } else {
        alert(data.message);
      }
    })
    .catch(error => console.error('Error:', error));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadQuestions();
  displayQuestionForms();
});