import { getAllBooks, searchBooks } from "../../../server/controller/book"

export default async function handler(req,res){

   
    const books = await getAllBooks();
  
   
  res.status(200).json(books)
  // const findBooks = await searchBooks(req.query)
  // console.log(findBooks);
  // res.status(200).json(findBooks)
  };