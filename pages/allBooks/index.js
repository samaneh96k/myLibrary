import axios from "axios";
import { useState } from "react";
import { ButtonGroup, Pagination,Button } from "react-bootstrap";
import AllBooks from "../../components/AllBooks";
import Layout from "../../components/Layout/Index";


const AllBooksIndex = ({ allBooks }) => {
  const [books, setBooks] = useState(allBooks);
  const handleClickRadioBtn = async (text) => {
    axios
      .get("/api/allBooks/cats", {
        params: { type: "cats", text },
      })
      .then((res) => {
        setBooks(res.data);
      })
      .catch((error) => console.log(err));
  };
console.log(books,)
    return (
      <Layout>
        
<AllBooks  books={books} handleClickRadioBtn={handleClickRadioBtn}></AllBooks>
        <div className="text-center">
        <Pagination size="small" />
      </div>
       </Layout>);
}
 
export default AllBooksIndex;
export const getServerSideProps = async (context) => {
  
    const allBooks = (await axios.get("http://localhost:3000/api/allBooks/cats", {
      params: { type: "cats", text: "psychology" },
    })).data;
  
    return {
      props: {
        allBooks,
      },
    };
  };
 