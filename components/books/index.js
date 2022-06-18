
import styles from "./books.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import {  Button  } from "react-bootstrap";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { Store } from "../../Store/store";
import Book from "../book";
const Books = ({ data }) => {
  SwiperCore.use([Navigation, Pagination]);
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
    <div className="mt-5 mb-5">
      {show
        ? <div className={styles.alert} variant="warning">
            <p>این مورد موجود است</p>
            <Button variant="light" onClick={() => setShow(false)}>
              {" "}<i
                className="fa fa-times"
                style={{ fontSize: 30, color: "#E9DAC1", margin: "2%" }}
              >
                {" "}
              </i>{" "}
            </Button>
          </div>
        : null}
      <Swiper
        pagination={true}
        modules={[Pagination]}
        freeMode={true}
        slidesPerView={8}
        spaceBetween={20}
        dir="rtl"
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 20
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 20
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }}
      >
        {data.map(book =>
          <SwiperSlide key={book._id}>
               <div className={styles.books}>
           
                <Book bookOne={book} addToFavoritesHandler={addToFavoritesHandler} />
           
              </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default Books;
// export async function getServerSideProps() {

//   const books =(await axios.get("/api/books")).data
//    return {
//      props: {
//        books
//      },
//    };
//  }
