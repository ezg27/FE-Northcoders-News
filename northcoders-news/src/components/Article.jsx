import React, { Component } from 'react';
import * as api from '../api';
import '../css/Article.css';
import CommentList from './CommentList';
import Modal from 'react-modal';
import Votes from './Votes';
import PostComment from './PostComment';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     borderRadius: '5px',
//     height: '50%',
//     width: '50%',
//     padding: '10px'
//   }
// };

Modal.setAppElement('#root');

class Article extends Component {
  state = {
    article: {},
    voteChange: 0,
    modalIsOpen: false,
    comment: {}
  };
  render() {
    const { article, comment } = this.state;
    if (Object.keys(article).length === 0) return <p>loading...</p>
    else return (
      <div>
        <section className="article-container">
          <h1>{article.title}</h1>
          <p>{article.body}</p>
          <Votes item={article} route='articles'/>
          <button onClick={this.openModal}>Add comment</button>
          <Modal
            id="comment-overlay"
            isOpen={this.state.modalIsOpen}
            // style={customStyles}
          >
            <PostComment closeModal={this.closeModal} articleId={article._id} currentUser={this.props.currentUser} handleNewComment={this.handleNewComment}/>
          </Modal>
          <CommentList id={this.props.id} newComment={comment}/>
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

  handleNewComment = (comment) => {
    this.setState({
      comment
    }).then(() => console.log('treee'))
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
}

export default Article;