
import { getSliders } from '../../../server/controller/book';
import data from '../../../server/data';
import books from '../../../server/model/books';




export default async function handler(req,res){

//await books.insertMany(data.Books);
const Books=await getSliders()

 
  res.send(Books);
};

