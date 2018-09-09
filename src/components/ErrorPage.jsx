import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorPage extends Component {
  
  render() {
    const linkVal = this.props.location.state.from === 'article' ? 'articles' : 'topics'
    return (
      <div>
        <p>hello</p>
        <Link to=''>
          <button>Back to {linkVal}</button>
        </Link>
      </div>
    );
  }
}

export default ErrorPage;