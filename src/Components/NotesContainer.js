import React from 'react'
import Note from './Note'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }
    render(){
        
    return(
        <ul>

            {this.apiResponse().map(resp => {
                    return < Note content={resp}/>
                })}
        </ul >
    )
    }

}
export default NotesContainer
