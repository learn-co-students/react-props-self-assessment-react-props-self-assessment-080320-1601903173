import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header';
import Note from './Components/Note';

const customString = "I'm A String";
const notes= ['note1', 'note2'];
// I AM STRUGGLIGN WITH GETTING CUSTOM KET NAMES FOR PROPS VALUES
class App extends Component {
  render() {
    return(
      <div>
        <Header props={customString} />
        <Note props = {notes} />
      </div>
      
    ) 
  }
}

export default App;
