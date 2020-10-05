import React from 'react'
import { Note } from './Note.js'

const arr = ["First Note", "Second Note", "Third Note", "Fourth Note"]
export default class NotesContainer extends React.Component {

  apiResponse = () => {
      return arr.map((note) => Note(note))
  }

  render() {
  return(
    <ul>
      {this.apiResponse()}
    </ul >
  )}

}