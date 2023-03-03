import React, { useState } from 'react';

function Drop() {
  const [options, setOptions] = useState([
    { value: 1, name: "Option 1" },
    { value: 2, name: "Option 2" },
    { value: 3, name: "Option 3" }
  ]);
  const [selectedOption, setSelectedOption] = useState(options[0]); // Initial selected value
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(options[0].value);
  
  const handleChange = (event) => {
    if (event.target.name === "options") {
      setSelectedOption(options.find((option) => option.name === event.target.value));
    } else if (event.target.name === "quantity") {
      setQuantity(event.target.value);
    }
    setTotal(selectedOption.value * quantity);
  }
  return (
    <div>
      <select value={selectedOption.name} onChange={handleChange} name="options">
        {options.map((option, index) => (
          <option key={index} value={option.name}>{option.name}</option>
        ))}
      </select>
      <input type="number" value={quantity} onChange={handleChange} name="quantity" min={1} />
      <div>Total: {total}</div>
    </div>
  );
}

export default Drop
