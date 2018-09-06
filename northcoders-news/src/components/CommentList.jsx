import React, { Component } from 'react';
import Votes from './Votes';
import * as api from '../api';
import '../css/CommentList.css';

class CommentList extends Component {
  state = {
    comments: []
  };
  render() {
    return (
      <div>
        <ul className="comment-list">
          {this.state.comments.map(comment => {
            return (
              <li key={comment._id} className="comment">
                <h6>{comment.created_by.username}</h6>
                <p>{comment.body}</p>
                <Votes item={comment} route="comments" />
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
