import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Card, CardImg, Button } from "react-bootstrap";
import styles from "./book.module.css";
const Book = ({ bookOne, addToFavoritesHandler }) => {
  const book={_id:bookOne._id,bookName:bookOne.bookName,writer:bookOne.writer}
  return (
    <Card className={styles.card}>
      <Link href={"/book/[bookId]"} as={`/book/${bookOne._id}`}>
        <div>
          <CardImg
            className={styles.imgBooks}
            src={`data:${bookOne.Photo.media
              .contentType};base64,${new Buffer.from(
              bookOne.Photo.media.data
            ).toString("base64")}`}
          />
          <p className={styles.text}>
            {bookOne.bookName}
          </p>
        </div>
      </Link>
      <Button variant="light" onClick={() => addToFavoritesHandler(book)}>
        {" "}<FontAwesomeIcon
          icon={faHeartCirclePlus}
          style={{ fontSize: 30, color: "#b8b8ff", margin: "2%" }}
        >
          {" "}
        </FontAwesomeIcon>{" "}
      </Button>
    </Card>
  );
};

export default Book;
