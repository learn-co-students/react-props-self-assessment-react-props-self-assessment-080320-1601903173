import React from 'react'
import Notes from './Components/Notes'

export default class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    return(
        <ul>
        {Notes}
        </ul >
    )

}
