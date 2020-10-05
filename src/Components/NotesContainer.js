import React from 'react'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    listItems = apiResponse.map(note => {
        <li> {note} </li>
    });

    return(
        <ul>{listItems}</ul>
    )

}
