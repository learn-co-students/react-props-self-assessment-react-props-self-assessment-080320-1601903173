import React from 'react'
import { render } from 'react-dom'


class Note extends React.Component {
    render() {
        return <li>{this.props.content}</li>
    }
}

export default Note;
