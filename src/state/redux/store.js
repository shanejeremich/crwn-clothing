import { applyMiddleware, createStore, compose } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const devTools =
  process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : a => a;

const store = createStore(rootReducer, compose(applyMiddleware(...middlewares), devTools));

const persistor = persistStore(store);

export { store, persistor };
