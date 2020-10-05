import React from 'react'
import Note from './Note'

class NotesContainer extends React.Component {
    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }
    renderNotes = () =>{
        return this.apiResponse().map((el) => <Note note={el}/>)
    }
    render() {
        console.log()
       return(
        <ul>
            {this.renderNotes()}
        </ul >
        // <Note />
        )
    }
}

export default NotesContainer;