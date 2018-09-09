import React, { Component } from 'react';
import Articles from './Articles';
import CreatePost from './CreatePost';
import '../css/App.css';

class MainPage extends Component {
  state = {
    newArticle: {}
  };
  render() {
    return (
      <div className="content-container">
        <section className='top-section'>
          <p htmlFor="">Hi there, {this.props.currentUser}!</p>
          <p>Share your thoughts today...</p>
          <CreatePost
            {...this.props}
            currentUser={this.props.currentUser}
            handleNewArticle={this.handleNewArticle}
          />
        </section>
        <Articles {...this.props} newArticle={this.state.newArticle} />
      </div>
    );
  }
  handleNewArticle = newArticle => {
    newArticle.created_by = { username: this.props.currentUser };
    this.setState({
      newArticle
    });
  };
}

export default MainPage;
