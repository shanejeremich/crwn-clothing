import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers/root-reducer";

const middlewares = [logger];

const devTools =
  process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : a => a;

const store = createStore(rootReducer, compose(applyMiddleware(...middlewares), devTools));

export default store;
