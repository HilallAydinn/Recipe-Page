import URL from '../config/config.js';

async function fetchAllQuestions() {
  const response = await fetch(`${URL}questions`);
  const data = await response.json();
  return data;
}

function createQuestionCard(question) {
  const card = document.createElement('div');
  card.className = 'question-card';
  const formattedDate = question.date.split('T')[0];
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

document.addEventListener('DOMContentLoaded', () => {
  loadQuestions();
});