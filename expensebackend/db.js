import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Harshit@123', // replace your mysql root password
  database: 'expense_app_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected');
});

export default db;