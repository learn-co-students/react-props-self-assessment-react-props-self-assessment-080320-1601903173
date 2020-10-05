import React, { Component } from 'react';


class Note extends Component {
    render() {
        return (
            function Note() {
                return <li>{this.props.content}</li>
            }
        )
    }
}

export default Note;
