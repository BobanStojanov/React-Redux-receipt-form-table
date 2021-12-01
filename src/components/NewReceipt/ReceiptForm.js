import React from "react";
import { connect } from "react-redux";
import { addReceipt } from "../Redux/Actions";
import "./ReceiptForm.css";

let ReceiptForm = ({ dispatch }) => {
  let form;

  return (
    <form
      ref={(node) => (form = node)}
      onSubmit={(event) => {
        event.preventDefault();
        const receipt = {
          id: new Date().getTime(),
          name: form.name.value,
          source: form.source.value,
          ingridients: Array.from(
            form.ingridients.selectedOptions,
            (option) => option.value
          ),
          timeHour: form.timeHour.value,
          timeMin: form.timeMin.value,
          instructions: form.instructions.value,
        };
        dispatch(addReceipt(receipt));
      }}
    >
      <div>
        <input type="text" placeholder="Receipt Name" name="name" required />
      </div>
      <div>
        <input type="text" placeholder="Receipt Source" name="source" />
      </div>
      <div>
        <select name="ingridients" multiple required>
          <option value=""></option>
          <option>Flour</option>
          <option>Milk</option>
          <option>Oil</option>
          <option>Salt</option>
          <option>Sugar</option>
          <option>Eggs</option>
          <option>Tomatoes</option>
          <option>Peppers</option>
          <option>Cheese</option>
          <option>Potatoes</option>
          <option>Meat</option>
        </select>
      </div>
      <div>
        <input
          className="hours-input"
          type="number"
          placeholder="hours"
          name="timeHour"
        />
        {":"}
        <input
          className="minutes-input"
          type="number"
          placeholder="min"
          name="timeMin"
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Preparation Instruction"
          name="instructions"
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default connect()(ReceiptForm);
