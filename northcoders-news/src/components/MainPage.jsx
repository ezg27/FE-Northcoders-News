import React, { Component } from 'react';
import Articles from './Articles';
import CreatePost from './CreatePost';

class MainPage extends Component {
  render() {
    return (
      <div className="content-container">
        <Articles {...this.props} />
        <CreatePost />
      </div>
    );
  }
}

export default MainPage;
