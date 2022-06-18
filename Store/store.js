import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
  darkMode: Cookies.get("darkMode") === "ON" ? true : false,
  favorites: {
    favoriteItems: Cookies.get("favorites")
      ? JSON.parse(Cookies.get("favorites"))
      : []
  },

};

function  reducer(state, action){
  switch (action.type) {
    case "DARK_MODE_ON":
      return { ...state, darkMode: true };
    case "DARK_MODE_OFF":
      return { ...state, darkMode: false };
    case "ADD_FAVORITES": {
      const newItem = action.payload;
      const existItem = state.favorites.favoriteItems.find(
        item => item._id === newItem._id
      );
      const favoriteItems = existItem
        ? state.favorites.favoriteItems.map(item => {
            item._id === existItem._id ? item : newItem;
          })
        : [...state.favorites.favoriteItems, newItem];
      Cookies.set("favorites", JSON.stringify(favoriteItems));
      return { ...state, favorites: { ...state.favorites, favoriteItems } };
    }
    case "REMOVE_FAVORITES": {
      const favoriteItems = state.favorites.favoriteItems.filter(
        item => item._id !== action.payload._id
      );
      Cookies.set("favorites", JSON.stringify(favoriteItems));
      return { ...state, favorites: { ...state.favorites, favoriteItems } };
    }
    default:
      return state;
  }
}
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <Store.Provider value={value}>
      {props.children}
    </Store.Provider>
  );
}
