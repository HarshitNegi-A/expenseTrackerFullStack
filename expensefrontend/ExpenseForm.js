import React, { useState } from "react";

function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    onAdd({ title, amount, category });
    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={submitHandler} className="mb-6 flex flex-col items-center space-y-4">
      <input className="input" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input className="input" placeholder="Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <input className="input" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;