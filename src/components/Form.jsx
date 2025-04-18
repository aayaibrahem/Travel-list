import React, { useState } from "react";

export default function Form({ onadd }) {
  const [description, setdescription] = useState("");
  const [quantity, setquantity] = useState(1);

  function handlesubmit(e) {
    if (!description) return;
    e.preventDefault();
    const newitem = { description, quantity, packed: false, id: Date.now() };
    onadd(newitem);

    setdescription("");
    setquantity(1);
  }
  return (
    <>
      <form className="add-form" onSubmit={handlesubmit}>
        <h3>What do you need for your trip ?</h3>
        <select
          name=""
          id=""
          value={quantity}
          onChange={(e) => Number(setquantity(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}
