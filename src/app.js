import React from "react";
import ReactDOM from "react-dom";
import Main from "./component/main";
import { Provider } from "react-redux";
import newStore from "./reducers/store";
import "bootstrap/dist/css/bootstrap.min.css";

const store = newStore();

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
