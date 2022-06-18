import Link from "next/link";
import { Button } from "react-bootstrap";
import CreateBook from "../../components/createBook";
import Layout from "../../components/Layout/Index";

const AddNewBook = () => {
    return (<Layout>
        <div>
        
        <Button variant="light" style={{color:"#333!important",margin:"2%"}}> <Link href="/bookTable" style={{color:"#333!important"}}>جدول کتاب</Link></Button>
          
            <CreateBook></CreateBook>
          
        </div>
    </Layout> );
}
 
export default AddNewBook;