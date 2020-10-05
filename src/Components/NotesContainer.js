import React from 'react'
import Note from './Note'

class NotesContainer extends React.Component {
    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }
    render() {
       return(
        <ul>
            <Note content= {this.apiResponse()[0]}/>
            <Note content= {this.apiResponse()[1]}/>
            <Note content= {this.apiResponse()[2]}/>
        </ul >
        )
    }
}

export default NotesContainer;