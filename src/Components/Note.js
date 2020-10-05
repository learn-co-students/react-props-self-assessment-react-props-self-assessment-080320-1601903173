import React from 'react'

class Note extends React.Component {
     Note() {
        return <li>{this.props.content}</li>
    }

    render() {
    
      return(
        <div>
          
          <h1>{console.log(this.props.props)}</h1>
          <p>{this.props.props.map( (el, i) => { return  <li>{this.props.props[i]}</li>})}</p>
        </div>
      ) 
        
        
    }
  }
  export default Note;


