
import BookTable from './../../components/bookTable/index';
import axios from 'axios';
const Table = ({allBooks}) => {
  console.log(allBooks)
    return ( <BookTable allBooks={allBooks}></BookTable> );
}
 
export default Table;
export const getServerSideProps = async (context) => {
  
    const allBooks = (await axios.get("http://localhost:3000/api/allBooks"
    
    )).data;
  
    return {
      props: {
        allBooks,
      },
    };
  };