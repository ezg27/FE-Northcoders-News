import React, { Component } from 'react';
import Modal from 'react-modal';
import PostArticle from './PostArticle';
import '../css/CreatePost.css';

class CreatePost extends Component {
  state = {
    modalIsOpen: false
  };
  render() {
    return <div className="create-post-container">
        <button onClick={this.openModal}>Create Post</button>
        <Modal id="comment-overlay" isOpen={this.state.modalIsOpen}>
          <PostArticle closeModal={this.closeModal} currentUser={this.props.currentUser} topic={this.props.match.params.topic} handleNewArticle={this.props.handleNewArticle} />
        </Modal>
      </div>;
  }
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
}

export default CreatePost;