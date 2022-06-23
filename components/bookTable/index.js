import { Table ,Button} from "react-bootstrap";
import Link from 'next/link';
import { Modal } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';
const BookTable = ({ allBooks }) => {



    return(<div style={{padding:"5%",fontSize:"12px"}}>
      
      <Link href="/allBooks" style={{ textDecoration: 'none' }}>   
        <Button variant="Light" style={{ direction: "ltr", margin: "2%" }}>
       بازگشت
               
                 
              
        </Button>
        </Link>
      <Table striped bordered hover size="sm" style={{padding:"5%",fontSize:"12px"}}>
    <thead>
      <tr>
       
        <th>نام کتاب</th>
        <th>نویسنده</th>
        <th>دسته بندی</th>
        <th>  سال انتشار</th>
        <th>   ویرایش</th>
        <th>  حذف</th>
      </tr>
    </thead>
    <tbody>
        {allBooks.map(book => (
          <tr key={book._id}>
            <td>{book.bookName}</td>
            <td>{book.writer}</td>
            <td>{book.category}</td>
            <td>{book.madeYear}</td>
            <td><Link href={"/edit/[bookId]"} as={`/edit/${book._id}`}>ویرایش</Link></td>
            <td><Button onClick={()=> Modal.confirm({
                    title: `حذف کتاب ${book.bookName}`,
                  
                    content: (
                      <p className="text-right">
                        اگر از حذف  اطمینان دارید روی حذف کلیک کنید.
                      </p>
                    ),
               
                    okText: "حذف",
                    okType: "danger",
                    cancelText: "لغو",
                    cancelButtonProps: "primary",
                    okButtonProps:{className:"mr-2"},
                    style: { direction: "rtl" },
                  
                   
              okType: "danger",
              onOk:()=>{
                 axios
                .delete("http://localhost:3000/api/book/update", { params: { id: book._id } })
                .then((res) => {
               
                    // console.log(res)
                    if(res.data.deletedBook._id){
                        toast.warning("کتاب مورد نظر با موفقیت حذف شد!")
                    }
                }).catch(err => {
                    toast.error("مشکلی رخ داده است!")
                })
            }
                  })}>حذف</Button></td>
     
          </tr>))}
    </tbody>
  </Table></div>)
}

export default BookTable;