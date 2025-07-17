import express from 'express';
import bookModel from '../models/bookModel.js';
const router = express.Router();


export async function getAllBooks(req, res){
  const books = await bookModel.find();
  res.status(200)
  .json({ books });
};


export function getBookById(req, res){
    //req.params.id
  res.status(200).json(books[req.params.id] );
};

export async function addBook(req, res){
    console.log(req.body);
    const { title, author } = req.body;
    const newBook = new bookModel({title, author});
    const savedBook  = await newBook.save();
    res.status(201).json({ message: "Book added successfully" ,
        book: savedBook
    });
};