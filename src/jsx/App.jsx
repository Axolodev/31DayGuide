import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Days from './Days';
import MainContent from './MainContent';

import '../css/App.css';

const AdsDisplay = () => <div className="AdsDisplay">AdsDisplay</div>;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <MainContent />
          <Days count={31}/>
          <AdsDisplay />
        </div>
      </Router>
    );
  }
}

export default App;
