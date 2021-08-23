import React from "react";
import "./App.css";
import GlobalStyle from "./utils/globalStyles";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default App;
