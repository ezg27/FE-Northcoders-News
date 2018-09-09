import React, { Component } from 'react';
import * as api from '../api';
import '../css/PostArticle.css';

class PostArticle extends Component {
  state = {
    newTitle: '',
    newArticle: '',
    user: {},
    topic: this.props.topic
  };
  render() {
    const { newTitle, newArticle } = this.state;
    const isEnabled = newTitle.length > 0 && newArticle.length > 0;
    return (
      <div>
        <button onClick={this.props.closeModal} className="modal-close">
          X
        </button>
        <form className="article-form">
          <textarea
            required
            onChange={this.handleTitleInput}
            className="title-input"
            placeholder="Add title..."
            value={this.state.newTitle}
          />
          <textarea
            required
            onChange={this.handleArticleInput}
            className="article-input"
            placeholder="Share your thoughts..."
            value={this.state.newArticle}
          />
          <select
            required
            defaultValue={
              this.props.topic === undefined ? 'choose' : this.props.topic
            }
            onChange={this.handleDropdown}
          >
            <option value="choose" disabled>
              Choose topic...
            </option>
            <option value="coding">Coding</option>
            <option value="football">Football</option>
            <option value="cooking">Cooking</option>
          </select>
          <button disabled={!isEnabled} onClick={this.handleSubmit}>
            Post article
          </button>
        </form>
      </div>
    );
  }

  componentDidMount() {
    api.fetchUser(this.props.currentUser).then(user => this.setState({ user }));
  }

  handleTitleInput = e => {
    this.setState({
      newTitle: e.target.value
    });
  };

  handleArticleInput = e => {
    this.setState({
      newArticle: e.target.value
    });
  };

  handleDropdown = e => {
    this.setState({
      topic: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    api
      .addArticle(
        this.state.user._id,
        this.state.topic,
        this.state.newTitle,
        this.state.newArticle
      )
      .then(newArticle => {
        this.props.handleNewArticle(newArticle);
        this.props.closeModal();
      });
  };
}

export default PostArticle;
