import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { Dashboard } from "./pages/Dashboard";
import { ConfirmationPage } from "./pages/ConfirmationPage";
import "antd/dist/antd.css";

ReactDOM.render(
  // <Provider store={store}>
    <App>
      <Router>
        <Switch>
          <React.Fragment>
            <Route exact path="/" component={Dashboard} />
            <Route path="/confirmed" component={ConfirmationPage} />
          </React.Fragment>
        </Switch>
      </Router>
    </App>,
  // </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
