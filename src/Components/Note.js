import React from 'react'


class Note extends React.Component {
    render() {
        console.log(this.props)
      return <li data-heading={this.props.note} id={this.props.id}>{this.props.note}</li>;
    }
  }
export default Note