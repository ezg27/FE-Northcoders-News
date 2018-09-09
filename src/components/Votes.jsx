import React, { Component } from 'react';
import * as api from '../api';
import VoteButton from './VoteButton';
import '../css/Articles.css';

class Votes extends Component {
  state = {
    item: this.props.item,
    voteChange: 0
  };
  render() {
    return (
      <div className='votes'>
        <VoteButton
          text={'Upvote'}
          adjustVotes={this.adjustVotes}
          itemId={this.state.item._id}
          voteChange={this.state.voteChange}
          route={this.props.route}
          button="up"
        />
        <p className='vote-count'>{this.state.item.votes + this.state.voteChange}</p>
        <VoteButton
          text={'Downvote'}
          adjustVotes={this.adjustVotes}
          itemId={this.state.item._id}
          voteChange={this.state.voteChange}
          route={this.props.route}
          button="down"
        />
      </div>
    );
  }

  adjustVotes = (id, adjust, route, button, repeats = 1) => {
    if (this.state.voteChange === 1 && button === 'down') repeats = 2;
    if (this.state.voteChange === -1 && button === 'up') repeats = 2;
    api.adjustVoteCount(id, adjust, route, repeats).then(arr => {
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
