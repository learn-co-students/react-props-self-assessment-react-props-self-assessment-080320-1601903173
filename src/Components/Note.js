import React from 'react'

//Start with functional first
function Note({ note }) {
    //destructuring
    //let { note } = props
    console.log("note from props: ", note)
    return <li>{note}</li>
}

export default Note;
