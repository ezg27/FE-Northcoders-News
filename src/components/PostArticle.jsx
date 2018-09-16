import React, { Component } from 'react';
import * as api from '../api';
import '../css/PostArticle.css';

class PostArticle extends Component {
  state = {
    newTitle: '',
    newArticle: '',
    user: {},
    selectedTopic: null
  };
  render() {
    const { newTitle, newArticle, selectedTopic } = this.state;
    const topic = selectedTopic || this.props.topic;
    const isEnabled = newTitle.length > 0 && newArticle.length > 0 && topic;
    return (
      <div className='post-article'>
        <button onClick={this.props.closeModal} className="modal-close">
          X
        </button>
        <form className="article-form">
          <textarea
            onChange={this.handleInput}
            className="title-input"
            placeholder="Add title..."
            value={this.state.newTitle}
            name='newTitle'
          />
          <textarea
            onChange={this.handleInput}
            className="article-input"
            placeholder="Share your thoughts..."
            value={this.state.newArticle}
            name='newArticle'
          />
          <select
            required
            defaultValue={
              this.props.topic === undefined ? 'choose' : this.props.topic
            }
            onChange={this.handleDropdown}
            className='selector'
          >
            <option value="choose" disabled>
              Choose topic...
            </option>
            <option value="coding">Coding</option>
            <option value="football">Football</option>
            <option value="cooking">Cooking</option>
          </select>
          <button disabled={!isEnabled} onClick={this.handleSubmit} className='submit-button'>
            Post article
          </button>
        </form>
      </div>
    );
  }

  componentDidMount() {
    api.fetchUser(this.props.currentUser).then(user => this.setState({ user }));
    this.setState({

    })
  }

  handleInput = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }; // handleChange to combine both of these vvvv

  handleDropdown = e => {
    this.setState({
      topic: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { selectedTopic, newTitle, newArticle, user } = this.state;
    const topic = selectedTopic || this.props.topic;
    api
      .addArticle(
        user._id,
        topic,
        newTitle,
        newArticle
      )
      .then(newArticle => {
        this.props.handleNewArticle(newArticle);
        this.props.closeModal();
      });
  };
}

export default PostArticle;
