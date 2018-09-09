import React, { Component } from 'react';
import './css/App.css';
import * as api from './api';
import MainPage from './components/MainPage';
import Article from './components/Article';
import ErrorPage from './components/ErrorPage';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

class App extends Component {
  state = {
    currentUser: 'jessjelly',
    topics: [],
    value: 0
  };
  render() {
    return (
      <div className="App">
        <NavBar topics={this.state.topics} />
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
}

export default App;
