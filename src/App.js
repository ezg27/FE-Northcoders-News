import React, { Component } from 'react';
import './css/App.css';
import * as api from './api';
import MainPage from './components/MainPage';
import Article from './components/Article';
import ErrorPage from './components/ErrorPage';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import typewriter from './images/typewriter.jpg';

class App extends Component {
  state = {
    currentUser: 'jessjelly',
    topics: []
  };
  render() {
    return (
      <div className="App">
        <div
          className="body-bg-image"
          style={{ background: `url(${typewriter}) center` }}
        />
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
            <Route
              path="/articles/:article_id"
              render={props => {
                return (
                  <Article {...props} currentUser={this.state.currentUser} />
                );
              }}
            />
            <Route path='*' component={ErrorPage} />
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
