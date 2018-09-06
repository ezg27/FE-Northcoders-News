import React, { Component } from 'react';
import './css/App.css';
import * as api from './api';
import MainPage from './components/MainPage';
import Article from './components/Article';
import { Switch, Link, Route } from 'react-router-dom';

class App extends Component {
  state = {
    currentUser: 'jessJelly',
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
            <Route exact path="/" component={MainPage} />
            <Route exact path="/articles" component={MainPage} />
            <Route path="/topics/:topic/articles" component={MainPage} />
            <Route
              path="/articles/:article_id"
              render={({ match }) => {
                return <Article id={match.params.article_id} />;
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
