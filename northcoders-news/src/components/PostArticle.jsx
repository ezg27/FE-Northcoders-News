import React, { Component } from 'react';

class PostArticle extends Component {
  state = {
    newArticle: ''
  }
  render() {
    return (
      <div>
        <button onClick={this.props.closeModal} className='modal-close'>X</button>
        <form className='article-form'>
          <textarea onChange={this.handleInput} className='article-input' />
          <select required>
            <option value="coding">Football</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
          </select>
          <button onClick={this.handleSubmit} >Post article</button>
        </form>
      </div>
    );
  }
}

export default PostArticle;