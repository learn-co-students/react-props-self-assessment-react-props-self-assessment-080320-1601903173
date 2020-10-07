import React from "react";

class Header extends React.Component {
  render() {
    console.log("header Props: ", this.props)
    return <h1>{this.props.header}</h1>;
  }
}

export default Header;
