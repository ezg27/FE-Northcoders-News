const DB_URL = 'https://whispering-wave-29555.herokuapp.com/api';

export const fetchTopics = () => {
  return fetch(`${DB_URL}/topics`)
    .then(buffer => buffer.json())
    .then(data => data.topics);
};

export const fetchArticles = () => {
  return fetch(`${DB_URL}/articles`)
    .then(buffer => buffer.json())
    .then(data => data.articles);
};

export const fetchArticlesByTopic = topic => {
  return fetch(`${DB_URL}/topics/${topic}/articles`)
    .then(buffer => buffer.json())
    .then(data => data.articles);
};

export const fetchArticleById = id => {
  return fetch(`${DB_URL}/articles/${id}`)
    .then(buffer => buffer.json())
    .then(data => data.article);
};

export const fetchCommentsByArticleId = id => {
  return fetch(`${DB_URL}/articles/${id}/comments`)
    .then(buffer => buffer.json())
    .then(data => data.comments);
};

export const adjustVoteCount = (id, adjust, route, repeats) => {
  let fetches = [];
  for (let i = 0; i < repeats; i++) {
    fetches.push(
      fetch(`${DB_URL}/${route}/${id}?vote=${adjust}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    );
  }
  return Promise.all(fetches);
};

export const fetchUser = username => {
  return fetch(`${DB_URL}/users/${username}`)
    .then(buffer => buffer.json())
    .then(data => data.user);
};

export const addComment = (articleId, userId, comment) => {
  const newComment = {
    body: comment,
    created_by: userId
  }
  return fetch(`${DB_URL}/articles/${articleId}/comments`, {
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: {
      'Content-Type': 'application/json'
    }
  })
};
