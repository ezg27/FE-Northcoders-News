import React, { Component } from 'react';
import './css/App.css';
import * as api from './api';
import MainPage from './components/MainPage';
import Article from './components/Article';
import ErrorPage from './components/ErrorPage';
import { Switch, Link, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  }
});

class App extends Component {
  state = {
    currentUser: 'jessjelly',
    topics: [],
    value: 0
  };
  render() {
    return (
      <div className="App">
          <AppBar position="static" color="inherit">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="secondary"
              centered
            >
              <Link to="/" className="link">
                <Tab label="Home" value={0} />
              </Link>
              {this.state.topics.map((topic, i) => {
                return (
                  <Link
                    key={i}
                    to={`/topics/${topic.slug}/articles`}
                    className="link"
                  >
                    <Tab label={topic.title} value={i} />
                  </Link>
                );
              })}
            </Tabs>
          </AppBar>
          <section>
            <Switch>
              <Route
                exact
                path="/"
                render={props => {
                  return (
                    <MainPage {...props} currentUser={this.state.currentUser} />
                  );
                }}
              />
              <Route
                exact
                path="/articles"
                render={props => {
                  return (
                    <MainPage {...props} currentUser={this.state.currentUser} />
                  );
                }}
              />
              <Route
                path="/topics/:topic/articles"
                render={props => {
                  return (
                    <MainPage {...props} currentUser={this.state.currentUser} />
                  );
                }}
              />
              <Route path="/error" component={ErrorPage} />
              <Route
                path="/articles/:article_id"
                render={props => {
                  return (
                    <Article {...props} currentUser={this.state.currentUser} />
                  );
                }}
              />
            </Switch>
          </section>
      </div>
    );
  }
  componentDidMount() {
    api.fetchTopics().then(topics => {
      this.setState({
        topics
      });
    });
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
}

export default App;
