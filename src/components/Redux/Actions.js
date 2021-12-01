import { ADD_RECEIPT } from "./Constants";

export function addReceipt(receipt) {
  return {
    type: ADD_RECEIPT,
    payload: receipt,
  };
}
