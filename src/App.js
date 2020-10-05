import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header'

class App extends Component {
  render() {
    return <header />
  }
}

class Header extends Component {
  render() {
    
  }

  Header.defaultProps = {
    header: "hello"
  }
}

export default App;
