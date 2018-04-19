import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import AppContainer from "./App";
import registerServiceWorker from "./registerServiceWorker";
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
