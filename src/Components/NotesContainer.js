import React from 'react'
import Note from './Note' 

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }
    
    render() {
        return(
            <div>
                <ul></ul >
                    <Note content="ear" />
            </div>
        )
    }
}



export default NotesContainer;
