//General react import
import React from "react";
//Components
import Navbar from "../components/navbar/Navbar";

class RouterRefreshResolver extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <main>{this.props.children}</main>
      </>
    );
  }
}

export default RouterRefreshResolver;
