import React, { Fragment } from "react";
import "./App.css";
import GlobalStyle from "./utils/globalStyles";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        {this.props.children}
      </Fragment>
    );
  }
}

export default App;
