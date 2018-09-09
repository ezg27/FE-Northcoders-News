import React, { Component } from 'react';
import Articles from './Articles';
import CreatePost from './CreatePost';

class MainPage extends Component {
  state = {
    newArticle: {}
  }
  render() {
    return (
      <div className="content-container">
        <CreatePost {...this.props} currentUser={this.props.currentUser} handleNewArticle={this.handleNewArticle}/>
        <Articles {...this.props} newArticle={this.state.newArticle}/>
      </div>
    );
  }
  handleNewArticle = (newArticle) => {
    newArticle.created_by = { username: this.props.currentUser };
    this.setState({
      newArticle
    })
  }
}

export default MainPage;
