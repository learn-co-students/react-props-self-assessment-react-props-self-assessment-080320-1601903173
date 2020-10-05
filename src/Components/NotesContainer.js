import React from 'react'
import Note from './Note.js'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    };
    render() {
            let mappedNotes = this.apiResponse().map(note => <Note content={note} />)
        return (
                <ul>{mappedNotes}</ul>
        )
    }
}

export default NotesContainer