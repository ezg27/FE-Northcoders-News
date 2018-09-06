import React, { Component } from 'react';
import './css/App.css';
import MainPage from './components/MainPage';
import Article from './components/Article'
import { Switch, Link, Route } from 'react-router-dom';

class App extends Component {
  state = {
    currentUser: 'jessjelly'
  }
  render() {
    return <div className="App">
        <header className="header-container">
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/topics/coding/articles'>Coding</Link>
            <Link to='/topics/football/articles'>Football</Link>
          </nav>
        </header>
        <section>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/articles' component={MainPage} />
            <Route path="/topics/:topic/articles" component={MainPage} />
            <Route path="/articles/:article_id" render={({ match }) => {
              return <Article id={match.params.article_id}/>
            }}/>
          </Switch>
        </section>
      </div>;
  }
}

export default App;
