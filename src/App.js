import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header'
import NotesContainer from './Components/NotesContainer'

class App extends Component {
  render() {
      console.log(this.props)
    return (
        <div>
            <Header header="headerProp" />
            <NotesContainer />
        </div>
    )
  }
}

export default App;
