import { combineReducers } from "redux";
import { ADD_RECEIPT } from "./Constants";

const mainReducer = (
  state = {
    receipts: [],
    formDisplay: false,
  },
  action
) => {
  switch (action.type) {
    case ADD_RECEIPT:
      return Object.assign({}, state, {
        receipts: [...state.receipts, action.payload],
      });

    default:
      return state;
  }
};

const receiptReducer = combineReducers({
  main: mainReducer,
});

export default receiptReducer;
