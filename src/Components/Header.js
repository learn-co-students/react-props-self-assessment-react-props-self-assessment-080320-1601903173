import React from "react";

class Header extends React.Component {
  render() {
    return <h1 className="header">{this.props.header}</h1>;
  }
}

Header.defaultProps = {
  header: 'Default Header'
}

export default Header;