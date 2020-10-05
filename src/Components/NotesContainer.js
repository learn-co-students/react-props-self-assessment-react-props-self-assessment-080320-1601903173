import React from 'react'
import note from "./Note"

export default class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    allNotes = () => {
        return this.apiResponse().map( function(props){
            return note(props)
        })
    }

        render() {return(
        <ul>
            {this.allNotes()}
        </ul>)
}
}


