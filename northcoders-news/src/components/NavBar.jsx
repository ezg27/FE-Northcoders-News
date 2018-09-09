import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Header from './Header';
import '../css/Header.css';

class NavBar extends Component {
  state = {
    value: 0
  };
  render() {
    return (
      <div className='app-bar'>
        <AppBar position="static" color="inherit">
        <Header />
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            textColor="secondary"
            style={{ margin: 'auto' }}
          >
            <Tab label="Home" component={Link} to="/" />
            {this.props.topics.map((topic, i) => {
              return (
                <Tab
                  label={topic.title}
                  key={i}
                  component={Link}
                  to={`/topics/${topic.slug}/articles`}
                />
              );
            })}
          </Tabs>
        </AppBar>
      </div>
    );
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };
}

export default NavBar;
