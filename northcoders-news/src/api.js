const DB_URL = 'https://whispering-wave-29555.herokuapp.com/api';

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
    .then(data => data.comments)
};

export const adjustVoteCount = (id, adjust, route, repeats) => {
  
  return fetch(`${DB_URL}/${route}/${id}?vote=${adjust}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}