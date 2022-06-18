
import { useRouter } from "next/router";

import Link from 'next/link';
import { useContext, useState } from "react";
import { Button , Card, CardImg} from "react-bootstrap";
import { Store } from "../../Store/store";
import Layout from "../Layout/Index";
import Book from "./../book/index";
import styles from "./Allbooks.module.css";
import data from './../../server/data';

const AllBooks = ({ books,handleClickRadioBtn }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const [show, setShow] = useState();
  const addToFavoritesHandler = book => {
    const existItem = state.favorites.favoriteItems.find(
      x => x.bookName === book.bookName
    );
    const quantity = existItem ? existItem.quantity + 1 : 1;
    if (existItem) {
      setShow(true);
    } else {
      dispatch({ type: "ADD_FAVORITES", payload: { ...book, quantity } });
      router.push("/favorites");
    }
  };
  return (
    <>
            <div >
          {data.cats.map((c,index) => (
            <Button variant="light" key={index} className={styles.btnCats} onClick={() => handleClickRadioBtn(c.value)}
            value={c.value}>{ c.text}</Button>   
          ))}
        
</div>
      {show
        ? <div className={styles.alert} variant="warning">
            <p>این مورد موجود است</p>
            <Button variant="light" onClick={() => setShow(false)}>
              {" "}<i
                
        className="fa fa-times"

                style={{ fontSize: 30, color: "#b8b8ff", margin: "2%" }}
              >
                {" "}
              </i>{" "}
            </Button>
          </div>
        : null}

        {books.length>0?(
      <div className={styles.allbooks}>
       {books.map((book,index) =>
          <div className={styles.book} key={book._id}>
            <Card className={styles.card}>
                 <CardImg className={styles.img}  src={`data:${book.Photo[0].media.contentType};base64,${(book.Photo[0].media?.data)}`}/>  
          <Link href={"/book/[bookId]"} as={`/book/${book._id}`}>
            <div>
              <p className={styles.text}>
                {book.bookName}
              </p>
            </div>
          </Link>
          <Button
            variant="light"
            onClick={() => addToFavoritesHandler(book)}
          >
            {" "}<i
        className="fa fa-gratipay"

            
              style={{ fontSize: 30, color: "#b8b8ff", margin: "2%" }}
            >
              {" "}
            </i>{" "}
          </Button>
        </Card>
          </div>
        )}
      </div>):(<div className={styles.notfound}><p>کتابی یافت نشد</p></div>)}
    </>
  );
};

export default AllBooks;
