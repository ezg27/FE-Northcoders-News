import axios from 'axios';
const DB_URL = 'https://whispering-wave-29555.herokuapp.com/api';

const errorHandling = apiFunc => {
  return (...args) =>
    apiFunc(...args).catch(err => {
      return { type: 'error', message: err.message };
    });
};

export const fetchTopics = errorHandling(() => {
  return axios.get(`${DB_URL}/topics`).then(({ data }) => data.topics);
});

export const fetchArticles = errorHandling(() => {
  return axios.get(`${DB_URL}/articles`).then(({ data }) => data.articles);
});

export const fetchArticlesByTopic = errorHandling(topic => {
  return axios
    .get(`${DB_URL}/topics/${topic}/articles`)
    .then(({ data }) => data.articles);
});

export const fetchArticleById = errorHandling(id => {
  return axios.get(`${DB_URL}/articles/${id}`).then(({ data }) => data.article);
});

export const fetchCommentsByArticleId = errorHandling(id => {
  return axios
    .get(`${DB_URL}/articles/${id}/comments`)
    .then(({ data }) => data.comments);
});

export const adjustVoteCount = errorHandling((id, adjust, route, repeats) => {
  let fetches = [];
  for (let i = 0; i < repeats; i++) {
    fetches.push(axios.put(`${DB_URL}/${route}/${id}?vote=${adjust}`));
  }
  return Promise.all(fetches);
});

export const fetchUser = errorHandling(username => {
  return axios.get(`${DB_URL}/users/${username}`).then(({ data }) => data.user);
});

export const addComment = errorHandling((articleId, userId, comment) => {
  return axios
    .post(`${DB_URL}/articles/${articleId}/comments`, {
      body: comment,
      created_by: userId
    })
    .then(({ data }) => data.comment);
});

export const deleteComment = errorHandling(commentId => {
  return axios
    .delete(`${DB_URL}/comments/${commentId}`)
    .then(({ data }) => data.comment);
});

export const addArticle = errorHandling((userId, topic, title, body) => {
  return axios
    .post(`${DB_URL}/topics/${topic}/articles`, {
      title,
      body,
      created_by: userId
    })
    .then(({ data }) => data.article);
});
