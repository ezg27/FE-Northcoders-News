import React, { Component } from 'react';
import * as api from '../api';

class PostArticle extends Component {
  state = {
    newTitle: '',
    newArticle: '',
    user: {},
    topic: this.props.topic
  };
  render() {
    return (
      <div>
        <button onClick={this.props.closeModal} className="modal-close">
          X
        </button>
        <form className="article-form">
          <textarea
            onChange={this.handleTitleInput}
            className="title-input"
            placeholder="Add title..."
            value={this.state.newTitle}
          />
          <textarea
            onChange={this.handleArticleInput}
            className="article-input"
            placeholder="Share your thoughts..."
            value={this.state.newArticle}
          />
          <select
            required
            defaultValue={
              this.state.topic === undefined ? 'choose' : this.state.topic
            }
          >
            <option value="choose" disabled>
              Choose topic...
            </option>
            <option value="coding">Coding</option>
            <option value="football">Football</option>
            <option value="cooking">Cooking</option>
          </select>
          <button onClick={this.handleSubmit}>Post article</button>
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

  handleSubmit = e => {
    e.preventDefault();
    api.addArticle(this.state.user._id, this.state.topic, this.state.newTitle, this.state.newArticle)
      .then(newArticle => {
        this.props.handleNewArticle(newArticle);
        this.props.closeModal();
      })
  };
}

export default PostArticle;
