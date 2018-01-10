import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../css/App.css';

const MainContent = () => <div className="MainContent">MainContent</div>;
const Days = () => {
  let content = [...Array(31).keys()].map((_, i) => <div key={i}>{i + 1}</div>);

  return <div className="Days"><div className="header">Days</div>{content}</div>
};
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
