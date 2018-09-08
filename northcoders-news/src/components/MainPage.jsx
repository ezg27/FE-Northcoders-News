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
        <Articles {...this.props} newArticle={this.state.newArticle}/>
        <CreatePost {...this.props} currentUser={this.props.currentUser} handleNewArticle={this.handleNewArticle}/>
      </div>
    );
  }
  handleNewArticle = (newArticle) => {
    this.setState({
      newArticle
    })
  }
}

export default MainPage;
