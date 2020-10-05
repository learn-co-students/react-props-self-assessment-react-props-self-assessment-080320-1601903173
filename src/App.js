import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header';
import NotesContainer from './Components/NotesContainer'

class App extends Component {
  render() {
    const header="whoa!"

    return (
        <div>
          <Header header={header} />
         < NotesContainer />
         </div>
    )
  }
}

export default App;
