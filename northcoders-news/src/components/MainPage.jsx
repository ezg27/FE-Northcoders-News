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
        <Articles {...this.props} />
        <CreatePost {...this.props} />
      </div>
    );
  }
}

export default MainPage;
