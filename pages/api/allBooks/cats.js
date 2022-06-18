import { searchBooks } from "../../../server/controller/book"

export default async function handler(req, res){
   
        const findBooks = await searchBooks(req.query)
        console.log(findBooks,"find");
        res.status(200).json(findBooks)
    
}