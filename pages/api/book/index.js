import { getBook } from "../../../server/controller/book"

export default async function handler(req,res){

    //await books.insertMany(data.Books);
  const book=await getBook(req.query)
  
   
  res.status(200).json(book)
  };
  