import styles from "./Layout.module.css";
import { Badge, Form ,Container} from "react-bootstrap";
import classNames from "classnames";
import { Store } from "../../Store/store";
import React, { useContext, useRef } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
const Layout = ({ children }) => {
  const ref = useRef();
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
              ref={ref}
              checked={darkMode}
              onChange={darkModeChangeHandler}
            className={styles.switch}
            />
          </Form></div>
        <div className={styles.RightMenu}>
          <>
          <Link href="/">
            <i className={classNames(styles.icon,"fa fa-book fa-book")}
        
          
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
                    <i className={classNames(styles.icon,"fa fa-heart")}
                    
                    
                    />{" "}
                  </Badge>
                </div>
              : <i
                  
                  className={classNames(styles.icon,"fa fa-heart-o")}
                   >
                  {" "}
                </i>}
          </Link>
        <Link href="/allBooks">
        <i
                     
                      className={classNames(styles.icon,"fa fa-list-alt")}
                       />
          </Link>
          <Link href="/addNewBook">
        <i
                    
                      className={classNames(styles.icon,"fa fa-plus-square")}
                     />
            </Link>
           
        </div>
      </div>
      <main className={darkMode ? styles.mainDark : styles.main}>
        {children}
      </main>
      <footer className={darkMode ? styles.footerDark : styles.footer}>
        <p>خلاصه کتاب های من را اینجا مشاهده میکنید</p>

      
      </footer>
    </Container>
  );
};

export default Layout;
