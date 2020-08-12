import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './HomePage';
import MyProfile from './MyProfile';
import AboutUsPage from './AboutUsPage';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/my-profile" component={MyProfile}/>
            <Route exact path="/about-us" component={AboutUsPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
