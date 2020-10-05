import React from 'react'
import Note from './Note'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    render() {
        let notes = this.apiResponse().map((note) => <Note content={note}/>)
        return(
            <ul id="notes-container">{notes}</ul >
        )
    }

}
export default NotesContainer;
