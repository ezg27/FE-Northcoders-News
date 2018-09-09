import React, { Component } from 'react';
import Modal from 'react-modal';
import PostArticle from './PostArticle';
import Button from '@material-ui/core/Button';
import '../css/CreatePost.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5px',
    height: '50%',
    width: '50%',
    padding: '10px'
  }
};

class CreatePost extends Component {
  state = {
    modalIsOpen: false
  };
  render() {
    return (
      <div className="create-post-container">
        <Button variant="contained" onClick={this.openModal}>
          Create Post
        </Button>
        <Modal
          id="comment-overlay"
          isOpen={this.state.modalIsOpen}
          style={customStyles}
        >
          <PostArticle
            closeModal={this.closeModal}
            currentUser={this.props.currentUser}
            topic={this.props.match.params.topic}
            handleNewArticle={this.props.handleNewArticle}
          />
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
