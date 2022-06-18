import Link from "next/link";
import { useContext } from "react";
import { Store } from "../../Store/store";
import Favorite from "../../components/favorite";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,

  } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layout/Index";
const Favorites = () => {
    const {  state,dispatch} = useContext(Store);
    console.log(state.favorites.favoriteItems)
    const removeItemHandler = (item) => {
        dispatch({ type: 'REMOVE_FAVORITES', payload: item });
      };
    return (<Layout> <Link href="/" style={{ textDecoration: 'none' }}>   
        <Button variant="Light" style={{ direction: "ltr", margin: "2%" }}>
        <FontAwesomeIcon
        icon={faHome}
        style={{ fontSize: 30, color: "#ffff" ,margin:"2%"}}
            >  </FontAwesomeIcon>
               
                 
              
        </Button>
        </Link>
          
        {state.favorites.favoriteItems.map((book) => ( 
            <Favorite key={book._id} book={book} removeItemHandler={ removeItemHandler} />
      ))}
           
    </Layout> );
}
 
export default Favorites;