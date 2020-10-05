import React from 'react'


class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    return(
        <ul>

        <li>"First Note"</li>,
        <li>"Second Note"</li>,
        <li>"Third Note"</li>

        </ul>
    )

}

export default NotesContainer