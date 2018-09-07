import React, { Component } from 'react';
import './css/App.css';
import * as api from './api';
import MainPage from './components/MainPage';
import Article from './components/Article';
import ErrorPage from './components/ErrorPage';
import { Switch, Link, Route } from 'react-router-dom';

class App extends Component {
  state = {
    currentUser: 'jessjelly',
    topics: []
  };
  render() {
    return (
      <div className="App">
        <header className="header-container">
          <nav>
            <Link to="/">Home</Link>
            {this.state.topics.map((topic, i) => {
              return (
                <Link key={i} to={`/topics/${topic.slug}/articles`}>
                  {topic.title}
                </Link>
              );
            })}
          </nav>
        </header>
        <section>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <MainPage {...props} currentUser={this.state.currentUser} />;
              }}
            />
            <Route
              exact
              path="/articles"
              render={(props) => {
                return <MainPage {...props} currentUser={this.state.currentUser} />;
              }}
            />
            <Route
              path="/topics/:topic/articles"
              render={(props) => {
                return <MainPage {...props} currentUser={this.state.currentUser} />;
              }}
            />
            <Route path="/error" component={ErrorPage} />
            <Route
              path="/articles/:article_id"
              render={props => {
                return (
                  <Article
                    {...props}
                    // id={match.params.article_id}
                    currentUser={this.state.currentUser}
                  />
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
