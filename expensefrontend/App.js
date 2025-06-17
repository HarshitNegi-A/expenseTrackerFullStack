import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await axios.get("http://localhost:5000/api/expenses");
    setExpenses(res.data);
  };

  useEffect(() => { fetchExpenses(); }, []);

  const addExpense = async (expense) => {
    await axios.post("http://localhost:5000/api/expenses", expense);
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await axios.delete(`http://localhost:5000/api/expenses/${id}`);
    fetchExpenses();
  };

  const updateExpense = async (id, updatedExpense) => {
    await axios.put(`http://localhost:5000/api/expenses/${id}`, updatedExpense);
    fetchExpenses();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-800">Expense Tracker</h1>
      <ExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} onUpdate={updateExpense} />
    </div>
  );
}

export default App;
