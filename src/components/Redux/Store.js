import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import receiptReducer from "./reducer";

const rootReducer = combineReducers({
  receipts: receiptReducer,
});

const middlewares = [thunkMiddleware];

const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];

const composedEnhancers = composeWithDevTools(...enhancers);

export default createStore(rootReducer, composedEnhancers);
