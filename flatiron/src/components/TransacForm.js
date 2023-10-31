import React, { useState } from "react";

function TransacForm({ onSubmitting }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0
  });

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitting(formData);
    
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  return (
    <form className="new-transaction" onSubmit={handleSubmit}>
      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        name="date" // Add name attributes to your input fields
        onChange={handleChange}
        value={formData.date}
      />
      <input
        type="text"
        name="description" // Add name attribute
        placeholder="Description"
        onChange={handleChange}
        value={formData.description}
      />
      <input
        type="text"
        name="category" // Add name attribute
        placeholder="Category"
        onChange={handleChange}
        value={formData.category}
      />
      <input
        type="number"
        name="amount" // Add name attribute
        placeholder="Amount"
        onChange={handleChange}
        value={formData.amount}
      />
      <button type= "submit"> Add Transaction</button>
    </form>
  );
}

export default TransacForm;
