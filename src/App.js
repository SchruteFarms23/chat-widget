import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import WidgetLayout from './components/layout/WidgetLayout';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <WidgetLayout />
      </div>
    );
  }
}

export default connect()(App);

//API key: ObrlkAALBoMK0N4Vl6ngHFGu2gHhO_sdsjDmxLvJkRWnfcfRKdWK3X5xWGSaPL8-q2Y9GADK3JsIXu8t8JhjqEuJJxIZCUXObvhlP_IVMoWmHvShRCVUKiHyBGbKWnYx
//client id: iqtvLc_WWdUNKt7Qi2lezQ
