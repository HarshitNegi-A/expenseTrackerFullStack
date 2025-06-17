import React, { useState } from "react";

function ExpenseList({ expenses, onDelete, onUpdate }) {
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ title: "", amount: "", category: "" });

  const startEdit = (expense) => {
    setEditId(expense.id);
    setEditData(expense);
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const saveEdit = () => {
    onUpdate(editId, editData);
    setEditId(null);
  };

  return (
    <div className="space-y-4">
      {expenses.map((expense) => (
        <div key={expense.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
          {editId === expense.id ? (
            <div className="flex space-x-2">
              <input name="title" value={editData.title} onChange={handleChange} className="input" />
              <input name="amount" type="number" value={editData.amount} onChange={handleChange} className="input" />
              <input name="category" value={editData.category} onChange={handleChange} className="input" />
            </div>
          ) : (
            <div>
              <div className="font-bold">{expense.title}</div>
              <div>₹ {expense.amount}</div>
              <div className="text-sm text-gray-500">{expense.category}</div>
            </div>
          )}
          <div className="space-x-2">
            {editId === expense.id ? (
              <>
                <button onClick={saveEdit} className="px-2 py-1 bg-green-500 text-white rounded">Save</button>
                <button onClick={() => setEditId(null)} className="px-2 py-1 bg-gray-500 text-white rounded">Cancel</button>
              </>
            ) : (
              <>
                <button onClick={() => onDelete(expense.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
                <button onClick={() => startEdit(expense)} className="px-2 py-1 bg-blue-500 text-white rounded">Edit</button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
