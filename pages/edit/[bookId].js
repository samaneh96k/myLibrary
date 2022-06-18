
import Layout from './../../components/Layout/Index';
import EditBook from './../../components/editBook/index';
import axios from "axios";
const BookUpdate = ({book}) => {

    return (<Layout>
     
            
       <EditBook Data={book}/>

    </Layout>);
}
 
export default BookUpdate;
export const getServerSideProps = async (context) => {
    const bookID = context.params.bookId;
    const book = (await axios.get("http://localhost:3000/api/book", { params: { bookID } })).data;
  
    return {
      props: {
        book,
      },
   
    };
  };