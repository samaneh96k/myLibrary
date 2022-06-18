import data from "../../../server/data";
import person from "../../../server/model/person";

export default async function handler(req,res){
 //await person.insertMany(data.persons)
  const Person=await person.find({})
  
 
    res.send(Person);
  };
  