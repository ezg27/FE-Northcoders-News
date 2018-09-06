import React, { Component } from 'react';
import * as api from '../api';

class Votes extends Component {
  state = {
    article: this.props.article,
    voteChange: 0,
    repeats: 0
  };
  render() {
    return (
      <div>
        <p>Votes: {this.state.article.votes + this.state.voteChange}</p>
        <button
          onClick={() => {
            this.adjustVotes(
              this.state.article._id,
              this.state.voteChange === 1 ? 'down' : 'up',
              'articles',
              this.state.repeats
            );
          }}
        >
          Upvote
        </button>
        <button
          onClick={() => {
            this.adjustVotes(
              this.state.article._id,
              this.state.voteChange === -1 ? 'up' : 'down',
              'articles',
              this.state.repeats
            );
          }}
        >
          Downvote
        </button>
      </div>
    );
  }
  adjustVotes = (id, adjust, route, repeats) => {
    api.adjustVoteCount(id, adjust, route, repeats).then(
      this.setState({
        voteChange: adjust === 'up' && repeats === 0 ? 1 : adjust === 'down' && repeats === 0 ? -1 : 0,
        repeats: ++repeats
      })
    );
  };
}

export default Votes;