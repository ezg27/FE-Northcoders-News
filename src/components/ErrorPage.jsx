import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/ErrorPage.css';

class ErrorPage extends Component {
  
  render() {
    const linkVal = !this.props.location.state ? 'topics' : this.props.location.state.from === 'article' ? 'articles' : 'topics';
    return <div className="error-container">
        <h3>Error! We're very sorry!</h3>
        <h4>{this.props.location.state ? this.props.location.state.err.message : 'Page not found!'}</h4>
        <Link to="">
          <button>Back to {linkVal}</button>
        </Link>
      </div>;
  }
}

export default ErrorPage;