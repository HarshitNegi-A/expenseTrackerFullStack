import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import expenseRoutes from './routes/expenseRoutes.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/expenses', expenseRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
