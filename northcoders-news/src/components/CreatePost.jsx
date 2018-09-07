import React, { Component } from 'react';
import Modal from 'react-modal';
import PostArticle from './PostArticle';
import '../css/CreatePost.css';

class CreatePost extends Component {
  state = {
    modalIsOpen: false,
    newArticle: {}
  };
  render() {
    return (
      <div className="create-post-container">
        <button onClick={this.openModal}>Create Post</button>
        <Modal id="comment-overlay" isOpen={this.state.modalIsOpen}>
          <PostArticle closeModal={this.closeModal} topic={this.props.match.params.topic}/>
        </Modal>
      </div>
    );
  }
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
}

export default CreatePost;