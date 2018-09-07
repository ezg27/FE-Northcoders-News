import React, { Component } from 'react';

class PostArticle extends Component {
  state = {
    newTitle: '',
    newArticle: '',
    topic: this.props.topic
  };
  render() {
    return (
      <div>
        <button onClick={this.props.closeModal} className="modal-close">
          X
        </button>
        <form className="article-form">
          <textarea
            onChange={this.handleTitleInput}
            className="title-input"
            placeholder="Add title..."
          />
          <textarea
            onChange={this.handleArticleInput}
            className="article-input"
            placeholder="Share your thoughts..."
          />
          <select
            required
            value={this.state.topic === undefined ? 'choose' : this.state.topic}
          >
            <option value="choose" disabled>
              Choose topic...
            </option>
            <option value="coding">Coding</option>
            <option value="football">Football</option>
            <option value="cooking">Cooking</option>
          </select>
          <button onClick={this.handleSubmit}>Post article</button>
        </form>
      </div>
    );
  }
}

export default PostArticle;