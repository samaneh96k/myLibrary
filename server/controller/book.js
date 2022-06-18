const books = require("../model/books");
const { deleteMedia } = require("./media");

const createBook = async ({
  bookName,
  text,
  writer,
  Photo,
  madeYear,
  category,
  
 
}) => {
  const newBook = await books.create({
  bookName,
  text,
  writer,
  Photo,
  madeYear,
  category,
  date:Date.now(),
  
  });

  return newBook;
};
const getBook = async ({bookID})=>{
    const book =await books.findById(bookID);
  
    return book;
}
const getSliders = async() => {
  const recent_slider = await books.find({}).sort("-date").limit(10)
  const old_slider = await books.find({}).sort("date").limit(10)

  return { recent:recent_slider , old:old_slider}
}
const getAllBooks = async () => {
  const Books = await books.find({});
  return Books
}
const searchBooks = async ({ type ,text}) => {
  if (type === "search") {
    console.log(text);
    const search = await books.aggregate([
      { $match: { BookName: { $regex: text, $options: "i" } } },
      { $project: { BookName: 1, _id: 1 } },
    ]);

    return search;
  } else if (type === "cats") {
    const search = await books.aggregate([
      { $match: {
       
        category: text 
      },
      },
      { $project: { bookName: 1, _id: 1, Photo: 1, category: 1 } },
      {
        $lookup: {
          from: 'media',
          localField: 'Photo',
          foreignField: '_id',
          as: 'Photo',
        },
      },
    ]);
  

    return search;
  }
}

const  updateBook = async (params) => {
  const { bookId, bookName,
    text,
    writer,
    Photo,
    madeYear,
    category} =
    params;

  const findBook = await books.findById(bookId);
  const pastImage = findBook.Photo._id;

  if (pastImage.toString() === Photo) {
    const newBook = await books.findByIdAndUpdate(
     bookId,
      {  bookName,
        text,
        writer,
        Photo,
        madeYear,
        category},
      { new: true }
    );
   
    return { newBook, status: 200 };
  } else if (
   
    pastImage.toString() !== Photo
  ) {
    const deleteImage = await deleteMedia(pastImage);
    if (deleteImage._id) {
      const newBook = await books.findByIdAndUpdate(
        bookId,
        {  bookName,
          text,
          writer,
          Photo,
          madeYear,
          category},
        { new: true }
      );
      return { newBook, status: 200 };
    } else {
      return { newBook, status: 400, error: "عکس مورد نظر پاک نشد!" };
    }
  }
};
const deleteBook =async (id) => {
  const book = await books.findById(id)
  console.log(id,"id book")
  const deletedImage = await deleteMedia(book.Photo._id)
 
  const deletedBook = await books.findByIdAndDelete(id)
  if(deletedImage._id && deletedBook._id){
      return {deletedBook , deletedImage  , status:200}
  }else if(!deletedImage._id  || !deletedBook._id){
      return {deletedBook , deletedImage  , status:400 , error:"فرآیند حذف بطور کامل صورت نگرفت!"}
  }else{
      return {deletedBook , deletedImage  , status:200}
  }
}
  module.exports ={getBook,getSliders,getAllBooks,searchBooks,createBook,updateBook,deleteBook}