import React from 'react'
import Note from './Note'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    return(
        apiResponse().map(note => <Note content={note}/> )
        // <ul></ul >
    )

}