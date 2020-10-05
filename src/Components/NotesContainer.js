import React from 'react'
import Note from './Note'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }
    render() {
    return(
        <ul>
          {this.apiResponse().map(item =>
            <Note content={item}/>
          )}
        </ul>
    )
    }

}
export default NotesContainer