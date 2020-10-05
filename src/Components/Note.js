import React from 'react'



// function note(props) {
//     return <li>{props}</li>
// }

// export default note

export default class Note extends React.Component{

    render(){
    return (
        <li>
            {this.props.content}
            </li>
            )}
}