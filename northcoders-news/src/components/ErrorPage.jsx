import React, { Component } from 'react';

class ErrorPage extends Component {
  render() {
    console.log(this.props.location)
    return (
      <div>
        <p>hello</p>
      </div>
    );
  }
}

export default ErrorPage;