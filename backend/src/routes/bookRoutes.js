import express from 'express';
import {addBook, getAllBooks, getBookById} from '../controller/bookController.js';

const router = express.Router();


router.get('/books', getAllBooks);
router.get('/book/:id', getBookById);
router.post('/books', addBooknpm );

export default router;