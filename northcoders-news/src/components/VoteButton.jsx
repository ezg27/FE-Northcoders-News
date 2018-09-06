import React, { Component } from 'react';

class VoteButton extends Component {
  render() {
    let adjust = '';
    if (this.props.button === 'up') adjust = this.props.voteChange === 1 ? 'down' : 'up';
    else adjust = this.props.voteChange === -1 ? 'up' : 'down';
    return (
      <div>
        <button
          onClick={() => {
            this.props.adjustVotes(
              this.props.itemId,
              adjust,
              this.props.route,
              this.props.button
            );
          }}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default VoteButton;
