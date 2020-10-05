import React from "react";

class Header extends React.Component {

  render(props) {
    return (
    <>
    <h1>This is a Header Component</h1>;
    <h2>{this.props.header}</h2>
    </>)
  }
}

export default Header;
