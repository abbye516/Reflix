import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Landing from './Components/Landing';
import Catalog from './Components/Catalog';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route path="/" exact component={Landing} />
            <Route path="/catalog" exact component={Catalog} />
        </div>
      </Router>
    );
  }
}

export default App;
