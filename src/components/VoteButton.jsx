import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/VoteButton.css';

class VoteButton extends Component {
  render() {
    let adjust = '';
    if (this.props.button === 'up')
    adjust = this.props.voteChange === 1 ? 'down' : 'up';
    else adjust = this.props.voteChange === -1 ? 'up' : 'down';
    return (
      <div>
        <FontAwesomeIcon
          icon={
            this.props.text === 'Upvote'
            ? this.handleUpvoteIcon()
            : this.handleDownvoteIcon()
          }
          className="VoteButton"
          style={
              this.props.text === 'Upvote'
                ? this.handleUpvoteStyle()
                : this.handleDownvoteStyle()
            }
            size="lg"
            onClick={() => {
              this.props.adjustVotes(
                this.props.itemId,
                adjust,
                this.props.route,
                this.props.button
              );
            }}
            />
        {/* <FontAwesomeIcon
          icon={
            this.props.voteChange === -1
            ? ['fas', 'arrow-alt-circle-down']
            : ['far', 'arrow-alt-circle-down']
          }
          style={
            this.props.voteChange === -1
            ? { color: '#33adff' }
            : { color: 'black' }
          }
          onClick={() => {
            this.props.adjustVotes(
              this.props.itemId,
              adjust,
              this.props.route,
              this.props.button
            );
          }}
        /> */}
      </div>
    );
  }
  handleUpvoteIcon = () => {
    return this.props.voteChange === 1
    ? ['fas', 'arrow-alt-circle-up']
    : ['far', 'arrow-alt-circle-up'];
  };
  handleDownvoteIcon = () => {
    return this.props.voteChange === -1
    ? ['fas', 'arrow-alt-circle-down']
    : ['far', 'arrow-alt-circle-down'];
  };
  handleUpvoteStyle = () => {
    return this.props.voteChange === 1
    ? { color: '#ff6666' }
    : { color: '#999999' };
  };
  handleDownvoteStyle = () => {
    return this.props.voteChange === -1
    ? { color: '#33adff' }
    : { color: '#999999' };
  };
}

export default VoteButton;
