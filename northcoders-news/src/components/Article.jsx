import React, { Component } from 'react';
import * as api from '../api';
import '../css/Article.css';
import CommentList from './CommentList';

class Article extends Component {
  state = {
    article: {}
  };
  render() {
    return <div>
        <section className="article-container">
          <h1>{this.state.article.title}</h1>
          <p>{this.state.article.body}</p>
          <CommentList id={this.props.id} />
        </section>
      </div>;
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