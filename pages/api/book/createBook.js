import { createBook } from "../../../server/controller/book"

export default async function handler(req,res){

    const newBook=await createBook(req.body.values)
   console.log(newBook);
       res.status(200).json(newBook)
   }