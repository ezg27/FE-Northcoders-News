import React, { Component } from 'react';
import * as api from '../api';
import '../css/Article.css';

class Article extends Component {
  state = {
    article: {}
  };
  render() {
    console.log(this.props.id);
    return (
      <div className="article-container">
        <h1>{this.state.article.title}</h1>
        <p>{this.state.article.body}</p>
      </div>
    );
  }
  componentDidMount() {
    api.fetchArticleById(this.props.id).then(article => {
      this.setState({
        article
      });
    });
  }
}

export default Article;