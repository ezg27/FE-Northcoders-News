import React, { Component } from 'react';
import Votes from './Votes';
import * as api from '../api';
import '../css/Articles.css';
import { Link } from 'react-router-dom';
import moment from 'moment';

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return (
      <div className="newsfeed-container">
        <ul className="article-list">
          {articles.map(article => {
            return <li key={article._id}>
                <div className="list-item">
                <Link to={{ pathname: `/articles/${article._id}` }} className="article">
                    <h4>{article.title}</h4>
                    <p className="created-by">
                      Created by {article.created_by.username}
                    </p>
                    <p className="timestamp">
                      {moment(article.created_at).format('lll')}
                    </p>
                    <p className="comment-count">
                      Comments: {article.comments}
                    </p>
                  </Link>
                  <Votes item={article} route="articles" />
                </div>
              </li>;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles(this.props.match.params.topic).then(articles => {
      this.setState({ articles, topic: this.props.match.params.topic });
    });
  }

  componentDidUpdate(prevProps) {
    const { topic } = this.props.match.params;
    if (prevProps.match.params.topic !== topic) {
      this.fetchArticles(topic).then(articles => {
        this.setState({
          articles
        });
      });
    }
    if (this.props.newArticle !== prevProps.newArticle) {
      this.setState({
        articles: [...this.state.articles, this.props.newArticle]
      });
    }
  }

  fetchArticles = topic => {
    return topic ? api.fetchArticlesByTopic(topic) : api.fetchArticles();
  };
}

export default Articles;
