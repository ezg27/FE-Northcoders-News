import React, { Component } from 'react';
import * as api from '../api';
import VoteButton from './VoteButton';

class Votes extends Component {
  state = {
    article: this.props.article,
    voteChange: 0
  };
  render() {
    return (
      <div>
        <p>Votes: {this.state.article.votes + this.state.voteChange}</p>
        <VoteButton
          text={'Upvote'}
          adjustVotes={this.adjustVotes}
          articleId={this.state.article._id}
          voteChange={this.state.voteChange}
          route="articles"
          button="up"
        />
        <VoteButton
          text={'Downvote'}
          adjustVotes={this.adjustVotes}
          articleId={this.state.article._id}
          voteChange={this.state.voteChange}
          route="articles"
          button="down"
        />
      </div>
    );
  }
  adjustVotes = (id, adjust, route, button, repeats = 1) => {
    if (this.state.voteChange === 1 && button === 'down') repeats = 2;
    if (this.state.voteChange === -1 && button === 'up') repeats = 2;
    api.adjustVoteCount(id, adjust, route, repeats).then(arr => {
      console.log(arr);
      this.setState({
        voteChange:
          adjust === 'up'
            ? this.state.voteChange + repeats
            : adjust === 'down'
              ? this.state.voteChange - repeats
              : 0
      });
    });
  };
}

export default Votes;
