import React, { Fragment } from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}

export default App;
