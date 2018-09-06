import React, { Component } from 'react';
import * as api from '../api';
import '../css/CommentList.css';

class CommentList extends Component {
  state = {
    comments: []
  }
  render() {
    return (
      <div>
        <ul className='comment-list'>
          {this.state.comments.map(comment => {
            return (
              <li key={comment._id} className='comment'>
                <h6>{comment.created_by.username}</h6>
                <p>{comment.body}</p>
                <p>Votes: {comment.votes}</p>
              </li>

            )
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
}

export default CommentList;