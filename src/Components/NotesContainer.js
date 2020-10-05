import React from 'react'
import note from "./Note"

export default class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    allNotes = () => {
        return this.apiResponse().map( function(props){
            // console.log(note)
            return note(props)
            // return <div> {note}</div>
            // return <Note content={note} />
        })
    }

        render() {return(
        <ul>
            
            {this.allNotes()}
        </ul>)
}
}


