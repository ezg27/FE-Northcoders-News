import React, { Component } from 'react';
import * as api from '../api';
import '../css/Article.css';
import CommentList from './CommentList';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5px',
    height: '50%'
  }
};

class Article extends Component {
  state = {
    article: {},
    modalIsOpen: false
  };
  render() {
    return (
      <div>
        <section className="article-container">
          <h1>{this.state.article.title}</h1>
          <p>{this.state.article.body}</p>
          <p>Votes: {this.state.article.votes}</p>
          <button
            onClick={() => {
              this.adjustVotes(this.state.article._id, 'up', 'articles');
            }}
          >
            Upvote
          </button>
          <button
            onClick={() => {
              this.adjustVotes(this.state.article._id, 'down', 'articles');
            }}
          >
            Downvote
          </button>
          <button onClick={this.openModal}>Open Modal</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
            <button onClick={this.closeModal}>X</button>
            <form>
              <input />
              <button>tab navigation</button>
            </form>
          </Modal>
          <CommentList id={this.props.id} />
        </section>
      </div>
    );
  }
  openModal = () => {
    this.setState({ modalIsOpen: true });
  }
  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }
  componentDidMount() {
    api.fetchArticleById(this.props.id).then(article => {
      this.setState({
        article
      });
    });
  }
  adjustVotes = (id, adjust, route) => {
    api.adjustVoteCount(id, adjust, route).then(() => {
      api.fetchArticleById(this.state.article._id).then(article => {
        this.setState({ article });
      });
    });
  };
}

export default Article;
