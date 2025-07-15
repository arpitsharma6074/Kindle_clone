import express from 'express';
import {getAllBooks, getBookById} from '../controller/bookController.js';

const router = express.Router();


router.get('/books', getAllBooks);
router.get('/book/:id', getBookById);

export default router;