import URL from '../config/config.js';

async function fetchQuestionDetails(id) {
  const response = await fetch(`${URL}questions/id/${id}`);
  const data = await response.json();
  return data;
}

async function fetchQuestionComments(questionId) {
  const response = await fetch(`${URL}questions/${questionId}/comments`);
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
    <button id="answer-btn">Add Comment</button>
  `;
  return card;
}

function createCommentSection(comments) {
  const commentSection = document.createElement('div');
  commentSection.className = 'comment-section';

  comments.forEach(comment => {
    const commentElement = document.createElement('div');
    commentElement.className = 'comment';
    const formattedDate = comment.date.split('T')[0];
    commentElement.innerHTML = `
      <p>${comment.text}</p>
      <div id=card-info>
        <p>Posted by <b>${comment.commenter}</b></p>
        <p>on ${formattedDate}</p>
      </div>
      <hr>
    `;
    commentSection.appendChild(commentElement);
  });

  return commentSection;
}

async function displayQuestion() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  if (!id) {
    console.error('No question ID provided');
    return;
  }

  const question = await fetchQuestionDetails(id);

  if (!question) {
    console.error('Question not found');
    return;
  }

  const questionContainer = document.querySelector('.question-container');
  
  if (questionContainer) {
    const questionCard = createQuestionCard(question);
    questionContainer.appendChild(questionCard);
    const comments = await fetchQuestionComments(id);
    const commentSection = createCommentSection(comments);
    questionContainer.appendChild(commentSection);
  } else {
    console.error('Question container not found');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  displayQuestion();
});
