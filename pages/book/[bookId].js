import axios from "axios";
import SingleBook from "../../components/SingleBook";
import Layout from './../../components/Layout/Index';

const Book = ({book}) => {

    return (<Layout>
     
            
       <SingleBook book={book}/>

    </Layout>);
}
 
export default Book;
export const getServerSideProps = async (context) => {
    const bookID = context.params.bookId;
    const book = (await axios.get("http://localhost:3000/api/book", { params: { bookID } })).data;
  
    return {
      props: {
        book,
      },
    };
  };