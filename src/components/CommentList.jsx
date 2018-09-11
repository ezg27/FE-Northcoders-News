import React, { Component } from 'react';
import Votes from './Votes';
import * as api from '../api';
import '../css/CommentList.css';

class CommentList extends Component {
  state = {
    comments: [],
    deletedComments: [],
    currentUser: this.props.currentUser
  };
  render() {
    const { deletedComments } = this.state;
    return (
      <div>
        <ul className="comment-list">
          {this.state.comments[0] === undefined
            ? null
            : this.state.comments.map(comment => {
                return deletedComments.includes(comment._id) ? null : (
                  <li key={comment._id} className="comment">
                    <h6 className='comment-user'>{comment.created_by.username}</h6>
                    <p className="comment-text">{comment.body}</p>
                    <Votes item={comment} route="comments" />
                    {comment.created_by.username === this.state.currentUser && (
                      <button
                        onClick={() => this.handleDeleteComment(comment._id)}
                        className='delete-button'
                      >
                        Delete
                      </button>
                    )}
                  </li>
                );
              })}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    api.fetchCommentsByArticleId(this.props.id).then(comments => {
      this.setState({
        comments
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.newComment !== prevProps.newComment) {
      this.setState({
        comments: [...this.state.comments, this.props.newComment]
      });
    }
  }

  handleDeleteComment = commentId => {
    api.deleteComment(commentId).then(comment => {
      this.setState({
        deletedComments: [...this.state.deletedComments, comment._id]
      });
    });
  };

  adjustVotes = (id, adjust, route) => {
    api.adjustVoteCount(id, adjust, route).then(() => {
      api.fetchCommentsByArticleId(this.props.id).then(comments => {
        this.setState({
          comments
        });
      });
    });
  };
}

export default CommentList;
