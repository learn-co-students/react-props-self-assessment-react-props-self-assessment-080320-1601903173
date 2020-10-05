import React from 'react'
import Note from './Note'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    renderNotes = () => {
        return this.apiResponse().map((element) => <Note note = {element}/>)
    }

    render(){
    return (  
        <ul>{this.renderNotes()}</ul>
        )
    }

}

export default NotesContainer