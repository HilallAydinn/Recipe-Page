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
    <div id="comment-form-container" style="display: none;">
      <form id="comment-form">
        <textarea id="comment-text" placeholder="Enter your comment"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
    <p id="login-message" style="display: none; color: red;">Log in to comment</p>
  `;

  const answerBtn = card.querySelector('#answer-btn');
  const commentFormContainer = card.querySelector('#comment-form-container');
  const loginMessage = card.querySelector('#login-message');

  answerBtn.addEventListener('click', () => {
    fetch('/api/auth/check', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.isAuthenticated) {
        commentFormContainer.style.display = 'block';
        loginMessage.style.display = 'none';
      } else {
        loginMessage.style.display = 'block';
      }
    })
    .catch(error => console.error('Error:', error));
  });

  const commentForm = card.querySelector('#comment-form');

  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const commentText = card.querySelector('#comment-text').value;
    const questionId = question.id;

    fetch('/api/comments/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        question_id: questionId,
        comment_text: commentText
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Comment added successfully') {
        alert('Comment added!');
        commentFormContainer.style.display = 'none';
        card.querySelector('#comment-text').value = '';
      } else {
        alert(data.message);
      }
    })
    .catch(error => console.error('Error:', error));
  });

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