import React from "react";

import { connect } from "react-redux";
import "./ReceiptList.css";

const ReceiptList = ({ receipts }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Receipt Name</th>
            <th>Receipt Source</th>
            <th>Receipt Ingridients</th>
            <th>Receipt Time</th>
            <th>Preparation Instructions</th>
          </tr>
        </thead>
        <tbody>
          {receipts.map((receipt) => (
            <tr key={receipt.id}>
              <td>{receipt.id}</td>
              <td>{receipt.name}</td>
              <td>{receipt.source}</td>
              <td>
                {receipt.ingridients.length > 3
                  ? receipt.ingridients
                      .map((ingridient) => ingridient)
                      .slice(0, 3) + "..."
                  : receipt.ingridients.map((ingredient) => ingredient + ", ")}
              </td>

              <td>{`${receipt.timeHour} hours : ${receipt.timeMin} minutes`}</td>
              <td>
                {receipt.instructions.length > 50
                  ? receipt.instructions.substring(0, 50) + "..."
                  : receipt.instructions}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    receipts: state.receipts.main.receipts,
  };
};

export default connect(mapStateToProps)(ReceiptList);
