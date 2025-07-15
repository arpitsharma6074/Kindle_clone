import express from 'express';
import dotenv from 'dotenv';
import bookRoutes from './routes/bookRoutes.js';
import router from './routes/bookRoutes.js';
dotenv.config();
const app = express();
// const PORT = process.env.PORT || 3000;
const PORT = 8000;

app.get('/', (req, res) => {
  res.status(200).send('Hello, Kindle Clone!');
});

app.use('/api/v1', router);

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
export default app;