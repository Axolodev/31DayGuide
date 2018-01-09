import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../css/App.css';

const MainContent = () => <div className="MainContent">MainContent</div>;
const Days = () => <div className="Days">Days</div>;
const AdsDisplay = () => <div className="AdsDisplay">AdsDisplay</div>;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <MainContent />
          <Days />
          <AdsDisplay />
        </div>
      </Router>
    );
  }
}

export default App;
