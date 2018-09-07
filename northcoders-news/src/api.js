import axios from 'axios';
const DB_URL = 'https://whispering-wave-29555.herokuapp.com/api';

export const fetchTopics = () => {
  return axios.get(`${DB_URL}/topics`)
    .then(({data}) => data.topics);
};

export const fetchArticles = () => {
  return axios.get(`${DB_URL}/articles`)
    .then(({data}) => data.articles);
};

export const fetchArticlesByTopic = topic => {
  return axios.get(`${DB_URL}/topics/${topic}/articles`)
    .then(({data}) => data.articles);
};

export const fetchArticleById = id => {
  return axios.get(`${DB_URL}/articles/${id}`)
    .then(({data}) => data.article);
};

export const fetchCommentsByArticleId = id => {
  return axios.get(`${DB_URL}/articles/${id}/comments`)
    .then(({data}) => data.comments);
};

export const adjustVoteCount = (id, adjust, route, repeats) => {
  let fetches = [];
  for (let i = 0; i < repeats; i++) {
    fetches.push(
      axios.put(`${DB_URL}/${route}/${id}?vote=${adjust}`)
    );
  }
  return Promise.all(fetches);
};

export const fetchUser = username => {
  return axios.get(`${DB_URL}/users/${username}`)
    .then(({data}) => data.user);
};

export const addComment = (articleId, userId, comment) => {
  return axios
    .post(`${DB_URL}/articles/${articleId}/comments`, {
      body: comment,
      created_by: userId
    })
    .then(({ data }) => data.comment);
};

export const deleteComment = (commentId) => {
  return axios.delete(`${DB_URL}/comments/${commentId}`)
    .then(({data}) => data.comment);
}