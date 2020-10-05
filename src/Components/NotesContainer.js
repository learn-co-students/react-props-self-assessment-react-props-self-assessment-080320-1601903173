import React from 'react';
import Note from './Note';

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    render (){
            return <ul>
                {this.apiResponse().map(element => (
                    <li>
                        <Note content={element}/>
                    </li>
                ))}
            </ul >
    }
}
export default NotesContainer;
