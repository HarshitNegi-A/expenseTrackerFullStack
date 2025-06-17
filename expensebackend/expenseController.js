import db from '../db.js';

export const getExpenses = (req, res) => {
  db.query('SELECT * FROM expenses', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

export const addExpense = (req, res) => {
  const { title, amount, category } = req.body;
  db.query('INSERT INTO expenses (title, amount, category) VALUES (?, ?, ?)', [title, amount, category], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId });
  });
};

export const deleteExpense = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM expenses WHERE id = ?', [id], err => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Expense deleted' });
  });
};

export const updateExpense = (req, res) => {
  const { id } = req.params;
  const { title, amount, category } = req.body;
  db.query('UPDATE expenses SET title = ?, amount = ?, category = ? WHERE id = ?', [title, amount, category, id], err => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Expense updated' });
  });
};
