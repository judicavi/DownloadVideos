import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import { createBrowserHistory } from "history";
import createRootReducer, { defaultState } from "./";

const history = createBrowserHistory();

const newStore = () => {
  return createStore(
    createRootReducer(history),
    defaultState,
    composeWithDevTools
  );
};

export default newStore;
