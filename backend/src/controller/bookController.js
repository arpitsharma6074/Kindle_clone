import express from 'express';
const router = express.Router();

const books  = [1,2,3];

export function getAllBooks(req, res){
  res.status(200).json({ books });
};


export function getBookById(req, res){
    //req.params.id
  res.status(200).json(books[req.params.id] );
};
