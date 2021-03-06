import React, { Component } from 'react';
import * as api from '../api';
import '../css/PostComment.css';

class PostComment extends Component {
  state = {
    newComment: '',
    user: {}
  };
  render() {
    const { newComment } = this.state;
    const isEnabled = newComment.length > 0;
    return (
      <div className="create-comment-container">
        <button onClick={this.props.closeModal} className="modal-close">
          X
        </button>
        <form className="comment-form">
          <textarea
            onChange={this.handleInput}
            className="comment-input"
            placeholder="Add comment..."
          />
          <button
            onClick={this.handleSubmit}
            disabled={!isEnabled}
            className="submit-button"
          >
            POST COMMENT
          </button>
        </form>
      </div>
    );
  }
  componentDidMount() {
    api.fetchUser(this.props.currentUser).then(user => this.setState({ user }));
  }

  handleInput = e => {
    this.setState({
      newComment: e.target.value
    });
  };
  
  handleSubmit = e => {
    e.preventDefault();
    api
      .addComment(
        this.props.articleId,
        this.state.user._id,
        this.state.newComment
      )
      .then(newComment => {
        this.props.handleNewComment(newComment);
        this.props.closeModal();
      });
  };
}

export default PostComment;
