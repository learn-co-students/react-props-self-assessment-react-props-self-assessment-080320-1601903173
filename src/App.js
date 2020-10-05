import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header';
import NotesContainer from './Components/NotesContainer'



class App extends Component {
  customString = () => "I'm a custom String!"
  render() {
    return(
      <div>
        <Header header={this.customString()} />
        <NotesContainer />

      </div>
      
    ) 
  }
}

export default App;
