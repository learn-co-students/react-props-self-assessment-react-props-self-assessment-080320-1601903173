import React from 'react'
import Note from './Note'
export default class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["Janus",
            "Jupiter",
            "Saturn",
            "Genius",
            "Mercury",
            "Apollo",
            "Mars",
            "Vulcan",
            "Neptune",
            "Sol",
            "Orcus",
            "Liber",
            "Tellus",
            "Ceres",
            "Juno",
            "Luna",
            "Diana",
            "Minerva",
            "Venus",
            "Vesta"]
    }
    renderNotes = () => {
        return this.apiResponse().map((el, key) => <Note id={key} note={el}/>)
    }

    render() {
        return (
            <ul>{this.renderNotes()}</ul >
            // <Note />
        )
    }

}