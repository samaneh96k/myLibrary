import { deleteBook, updateBook } from "../../../server/controller/book";

export default async function handler(req, res) {
    if (req.method === "PUT") {
      const book = await updateBook(req.body.values);
      if (book.status === 200) {
        res.status(200).json(book.newBook);
      } else if (book.status === 400) {
        res.status(400).json(book.error);
      }
    } else if (req.method === "DELETE") {
      const { id } = req.query;
      console.log(id,"id book")
      const deleteProccess = await deleteBook(id);
      if (deleteProccess.status === 200) {
        res.status(200).json(deleteProccess);
      } else if (deleteProccess.status === 400) {
        res.status(400).json(deleteProccess.error);
      }
    } else {
      res.status(404).send("مسیر مورد نظر یافت نشد!");
    }
  }