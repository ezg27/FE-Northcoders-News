import React, { Component } from 'react';
import * as api from '../api';
import '../css/Articles.css';
import { Link } from 'react-router-dom';

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    return (
      <div className="newsfeed-container">
        <ul className="article-list">
          {this.state.articles.map(article => {
            // const articleTitle = article.title
            //   .toLowerCase()
            //   .replace(/ /g, '_')
            //   .replace(/[.,:'()?!]/g, '');
            return (
              <li key={article._id} className="list-item">
                <Link to={{ pathname: `/articles/${article._id}` }}>
                  <h4>{article.title}</h4>
                </Link>
                <p>Created by {article.created_by.username}</p>
                <p>{article.created_at}</p>
                <p>Comments: {article.comments}</p>
                <p>Votes: {article.votes}</p>
                <button
                  onClick={() => {
                    this.adjustVotes(article._id, 'up', 'articles');
                  }}
                >
                  Upvote
                </button>
                <button
                  onClick={() => {
                    this.adjustVotes(article._id, 'down', 'articles');
                  }}
                >
                  Downvote
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles(this.props.match.params.topic).then(articles => {
      this.setState({
        articles
      });
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
  }

  fetchArticles = topic => {
    return topic ? api.fetchArticlesByTopic(topic) : api.fetchArticles();
  };

  adjustVotes = (id, adjust, route) => {
    api.adjustVoteCount(id, adjust, route).then(() => {
      this.fetchArticles(this.props.match.params.topic).then(articles => {
        this.setState({ articles });
      });
    });
  };
}

export default Articles;
