import React from 'react'


// class NotesContainer extends React.Component {

//     apiResponse = () => {
//         return ["First Note", "Second Note", "Third Note", "Fourth Note"]
//     }

//     return(
//         <ul></ul >
//     )

// }
function NotesContainer(content) {
    return (
        <div>
            <ul>
                <li>
                    {content.laNote}

                </li>
            </ul>
        </div>
    )
}

export default NotesContainer;
