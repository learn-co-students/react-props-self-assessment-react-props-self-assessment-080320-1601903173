import React from 'react'
import Note from './Note'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }
    // reccomended method
    renderNotes = () =>{
        return this.apiResponse().map((element) => <Note note={element}/>)
    }

    render() {
            //less  reccomended way
            // let notes = <ul>{this.apiResponse().map((note) => <Note />)}</ul >
            // ^ variables may only be added in the render

        return(
            <ul>{this.renderNotes()}</ul>
        )
    }

}

export default NotesContainer
