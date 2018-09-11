import React, { Component } from 'react';
import * as api from '../api';
import '../css/Article.css';
import CommentList from './CommentList';
import Modal from 'react-modal';
import Votes from './Votes';
import Button from '@material-ui/core/Button';
import PostComment from './PostComment';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from './Loading';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5px',
    height: '30%',
    width: '30%',
    padding: '10px'
  }
};

Modal.setAppElement('#root');

class Article extends Component {
  state = {
    completetd: 0,
    article: {},
    voteChange: 0,
    modalIsOpen: false,
    comment: {},
    err: null
  };
  render() {
    if (this.state.err)
      return (
        <Redirect
          to={{
            pathname: '/error',
            state: {
              from: 'article',
              err: this.state.err
            }
          }}
        />
      );
    const { article, comment } = this.state;
    if (Object.keys(article).length === 0) return <Loading />;
    else {
      return (
        <div className="article-container">
          <section className="article-body">
            <h1>{article.title}</h1>
            <p className='article-text'>{article.body}</p>
            <Votes item={article} route="articles" className="article-votes" />
            <Button
              variant="contained"
              onClick={this.openModal}
              className="button"
            >
              Add comment
            </Button>
            <Modal
              id="comment-overlay"
              isOpen={this.state.modalIsOpen}
              style={customStyles}
            >
              <PostComment
                closeModal={this.closeModal}
                articleId={article._id}
                currentUser={this.props.currentUser}
                handleNewComment={this.handleNewComment}
              />
            </Modal>
          </section>
          <CommentList
            id={this.props.match.params.article_id}
            currentUser={this.props.currentUser}
            newComment={comment}
          />
        </div>
      );
    }
  }
  componentDidMount() {
    api.fetchArticleById(this.props.match.params.article_id).then(response => {
      if (response.type === 'error') {
        this.setState({
          err: response
        });
      } else {
        this.setState({
          article: response
        });
      }
    });
  }

  handleNewComment = comment => {
    comment.created_by = {
      username: this.props.currentUser
    };
    this.setState({
      comment
    });
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
}

Article.propTypes = {
  id: PropTypes.string,
  currentUser: PropTypes.string
};

export default Article;
