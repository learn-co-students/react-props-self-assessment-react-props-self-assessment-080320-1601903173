import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import Header from './Components/Header'
import NotesContainer from './Components/NotesContainer'
const myNote = ["First Note", "Second Note", "Third Note", "Fourth Note"]
let note = myNote.map(function (myNote) { return <NotesContainer laNote={myNote} /> })

const create_string_array = ["minelie", "jessica", "gloria", "fleury", "jude"]
let theArray = create_string_array.map(function (create_string_array) { return <Header theString={create_string_array} /> })

ReactDOM.render(
 <div>
  {theArray}
  {note}
 </div>,
 document.getElementById("root")
);
