import React, { Component } from 'react';
import '../css/PostComment.css';

class PostComment extends Component {
  render() {
    return (
      <div className='create-comment-container'>
        {/* <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2> */}
        <button onClick={this.props.closeModal} className='modal-close'>X</button>
        <form className='comment-form'>
          <textarea className='comment-input' />
          {/* <button>tab navigation</button> */}
        </form>
      </div>
    );
  }
}

export default PostComment;