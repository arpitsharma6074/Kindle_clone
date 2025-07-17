import express, { json } from 'express';
import dotenv from 'dotenv';
import router from './routes/bookRoutes.js';
import { connectDB } from './config/mongo_db.js';

dotenv.config();
const app = express();
// const PORT = process.env.PORT || 3000;
const PORT = 8000;

connectDB();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello, Kindle Clone!');
});

app.use('/api/v1', router);

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
export default app;