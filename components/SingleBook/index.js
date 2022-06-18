import styles from "./Single.module.css"
import { Card, CardImg } from 'react-bootstrap';
const SingleBook = ({ book }) => {
    return (<>
           <div className={styles.book}>
        <div className={styles.bookDetails}>
               
                <CardImg className={styles.img} src={`data:${book.Photo.media.contentType};base64,${new Buffer.from(book.Photo.media.data).toString("base64")}`} />
                <div>
                    <h5>{book.bookName}</h5>
                    <p> نویسنده:{ book.writer}</p>
                    <p>سال انتشار:{ book.madeYear}</p>
                </div>
        
                
        </div>
            <div className={styles.bookText}>
                <p>{ book.text}</p>
        </div>
        </div>
    </>);
}
 
export default SingleBook;