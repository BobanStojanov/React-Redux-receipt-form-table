import React from "react";

import ReceiptForm from "./components/NewReceipt/ReceiptForm";
import ReceiptList from "./components/Receipts/ReceiptList";

function App() {
  return (
    <div>
      {/* {!formDisplay && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {formDisplay && (
        <ReceiptForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )} */}
      {<ReceiptForm />}
      <ReceiptList />
    </div>
  );
}

export default App;
