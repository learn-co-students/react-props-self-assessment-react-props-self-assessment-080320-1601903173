import React, { Component } from "react";
import "./App.scss";
import Header from './Components/Header'
import NotesContainer from './Components/NotesContainer'


class App extends Component {
  render() {
    return (
      <>
        <Header header="Pantheon Romana" />
        <NotesContainer />
      </>
    )
  }
}

export default App;
