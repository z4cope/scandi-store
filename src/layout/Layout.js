//General react import
import React from "react";
//Components
import Navbar from "../components/navbar/Navbar";

class Layout extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <main>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
