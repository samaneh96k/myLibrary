import styles from "./Layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Form ,Container} from "react-bootstrap";

// import the icons you need
import {
  faArrowAltCircleRight,
  faBook,
  faLaptop,
  faHeartCircleBolt,
  faHeart,
  faPlusSquare,
  faBookOpen
} from "@fortawesome/free-solid-svg-icons";
import { Store } from "../../Store/store";
import { useContext } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
const Layout = ({ children }) => {
  const { state, dispatch } = useContext(Store);
  const { darkMode, favorites } = state;
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };

  return (
    <Container>
      <div className={darkMode ? styles.titleDark : styles.title}>
   <div className={ styles.switchBlock}> <Form variant="danger">
            <Form.Check
              type="switch"
              id="custom-switch"
              label=""
              checked={darkMode}
              onChange={darkModeChangeHandler}
            className={styles.switch}
            />
          </Form></div>
        <div className={styles.RightMenu}>
          <>
          <Link href="/">
            <FontAwesomeIcon
            icon={faBook}
           className={styles.icon}
          />
            </Link>
          </>
            
          <h3 className={styles.titleText}>به کتابخانه من خوش اومدی</h3>
          <h3 className={styles.titleSamalText}> کتابخانه من  </h3>
          
        </div>
        <div className={styles.leftMenu}>
        <Link href="/favorites">
            {favorites.favoriteItems.length > 0
              ? <div className={styles.badge}>
                  <Badge
                    pill
                    bg="#000"
                   className={styles.badgeicon}
                  >
                    {favorites.favoriteItems.length}{" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={styles.icon}
                    />{" "}
                  </Badge>
                </div>
              : <FontAwesomeIcon
                  icon={faHeartCircleBolt}
                  className={styles.icon}
                >
                  {" "}
                </FontAwesomeIcon>}
          </Link>
        <Link href="/allBooks">
        <FontAwesomeIcon
                      icon={faBookOpen}
                      className={styles.icon}
                    />
          </Link>
          <Link href="/addNewBook">
        <FontAwesomeIcon
                      icon={faPlusSquare}
                      className={styles.icon}
            />
            </Link>
           
        </div>
      </div>
      <main className={darkMode ? styles.mainDark : styles.main}>
        {children}
      </main>
      <footer className={darkMode ? styles.footerDark : styles.footer}>
        <p>خلاصه کتاب های من را اینجا مشاهده میکنید</p>

        <i className="fa fa-instagram" aria-hidden="true" />
      </footer>
    </Container>
  );
};

export default Layout;
