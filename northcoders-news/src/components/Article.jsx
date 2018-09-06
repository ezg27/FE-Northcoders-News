import React, { Component } from 'react';
import * as api from '../api';
import '../css/Article.css';
import CommentList from './CommentList';
import Modal from 'react-modal';
import Votes from './Votes';
import PostComment from './PostComment';

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

Modal.setAppElement('#root');

class Article extends Component {
  state = {
    article: {},
    voteChange: 0,
    modalIsOpen: false
  };
  render() {
    if (Object.keys(this.state.article).length === 0) return <p>loading...</p>
    else return (
      <div>
        <section className="article-container">
          <h1>{this.state.article.title}</h1>
          <p>{this.state.article.body}</p>
          <Votes article={this.state.article}/>
          <button onClick={this.openModal}>Post comment</button>
          <Modal
            id="comment-overlay"
            isOpen={this.state.modalIsOpen}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <PostComment closeModal={this.closeModal} />
          </Modal>
          <CommentList id={this.props.id} />
        </section>
      </div>
    );
  }
  componentDidMount() {
    api.fetchArticleById(this.props.id).then(article => {
      this.setState({
        article
      });
    });
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {
    this.subtitle.style.color = '#f00';
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
}

export default Article;