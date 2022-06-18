import Link from "next/link";
import { CardImg } from "react-bootstrap";
import styles from "./favorite.module.css";

const Favorite = ({ book, removeItemHandler }) => {
  console.log(book, "booook");
  return (
    <div className={styles.bookIndex} key={book._id}>
      <Link href={"/book/[bookId]"} as={`/book/${book._id}`}>
        <div className={styles.books}>
        
        
            <div className={styles.bookDetails}>
              <h5>
                {book.bookName}
              </h5>
              <p>
                {" "}نویسنده:{book.writer}
              </p>
            
            
          </div>
        </div>
      </Link>

      <button
        className={styles.removeBtn}
        onClick={() => removeItemHandler(book)}
      >
        {" "}<i
        className="fa fa-minus-circle"
         
          style={{ fontSize: 30, color: "#fff", margin: "2%" }}
        >
          {" "}
        </i>
      </button>
      <hr />
    </div>
  );
};

export default Favorite;
